import Konva from 'konva';
import {v4 as uuid} from 'uuid';
import appStore from '../store/store';
import appAudio from '../sound/audio';
import {reactive} from 'vue';

import orbPattern from '../assets/orb-pattern-o3.png'
import {Group} from 'konva/lib/Group';

export const state = reactive({
    stage: null,
    layer: null,
    selectedNode: null,
    selectedLink: null,
    connections: [],
    // Context menu
    isContextMenuShown: false,
    contextMenuPosition: {top: 0, left: 0}
});

const store = appStore;
const audio = appAudio.instance;

// -------------------------------------------------

const clearOrbPattern = new Image();
clearOrbPattern.src = orbPattern;

export const initStage = ({container, width, height}) => {
    state.stage = new Konva.Stage({
        id: 'stage',
        container,
        width,
        height,
    });
    state.layer = new Konva.Layer();
    state.stage.add(state.layer);

    state.stage.on('contextmenu', onStageContextmenuHandler);
    state.stage.on('mousemove', onStageMousemoveHandler);
    state.stage.container().addEventListener('dragover', (e) => e.preventDefault()); // !important
    state.stage.container().addEventListener('drop', onStageDropHandler);

    document.addEventListener("click", resetContextMenu);
}

export const removeNode = () => {
    if (state.selectedNode) {
        switch (state.selectedNode.name()) {
            case 'element': {
                store.commit('spell/removeApex', {
                    id: state.selectedNode.id(),
                });
                break;
            }
        }
        state.selectedNode.destroy();
        state.selectedNode = null;
    }
}

export const combineNode = () => {
    return;
}

export const linkNode = () => {
    if (state.selectedNode) {
        let lineId = uuid();
        var lineNode = new Konva.Line({
            points: getConnectorPoints([
                {
                    pos: state.selectedNode.getAbsolutePosition(),
                    radius: state.selectedNode.getAttr('radius')
                },
                {
                    pos: state.stage.getPointerPosition(),
                    radius: 5
                }
            ]),
            id: lineId,
            name: 'connection',
            stroke: 'black',
            strokeWidth: 2,
            lineCap: 'round',
            lineJoin: 'round',
        });
        state.selectedLink = {
            nodes: [state.selectedNode],
            lineNode,
        };
        state.layer.add(lineNode);
    }
}

// --------------- Events -------------------------

const onNodeClick = (e) => {
    if (state.selectedLink) {
        state.connections.push({
            lineNode: state.selectedLink.lineNode,
            nodes: [...state.selectedLink.nodes, e.target],
        });
        state.selectedLink = null;
        updateConnections();
    }
}

const resetContextMenu = () => {
    state.isContextMenuShown = false;
    state.selectedNode = null;
}

const onNodeDragmove = event => {
    snapToStage(event.target);
    updateConnections();
}

const onStageMousemoveHandler = () => {
    // update points of selected link
    if (state.selectedLink) {
        state.selectedLink.lineNode.points(
            getConnectorPoints([
                {
                    pos: state.selectedLink.nodes[0].getAbsolutePosition(),
                    radius: state.selectedLink.nodes[0].getAttr('radius')
                },
                {
                    pos: state.stage.getPointerPosition(),
                    radius: 5
                }
            ])
        );
    }
}

const onStageContextmenuHandler = event => {
    event.evt.preventDefault();
    if (event.target.id() === 'stage') {
        return;
    }
    state.isContextMenuShown = true;
    state.isContextMenuShown = true;
    state.selectedNode = event.target;

    let containerRect = state.stage.container().getBoundingClientRect(),
        pointerPos = state.stage.getPointerPosition();

    state.contextMenuPosition = {
        top: `${containerRect.top + pointerPos.y}px`,
        left: `${containerRect.left + pointerPos.x}px`,
    }
}

const onStageDropHandler = event => {
    event.preventDefault();
    state.stage.setPointersPositions(event);
    let payload = JSON.parse(event.dataTransfer.getData('payload'));

    switch (payload.type) {
        case 'element': {
            addElementNode(payload.element);
            break;
        }
        case 'source': {
            addCoreNode(payload.source);
            break;
        }
    }
}


// --------------- Util -------------------------


const addCoreNode = source => {
    let id = uuid();

    var orb = new Konva.Shape({
        id,
        name: 'source',
        radius: 50,
        width: 100,
        height: 100,
        draggable: true,
        fillPatternImage: clearOrbPattern,
        fillPatternOffset: {x: 250, y: 250},
        fillPatternScale: {x: .2, y: .2},
        fillPatternRepeat: 'no-repeat',
        shadowColor: source.colors.secondary,
        shadowBlur: 5,
        sceneFunc: function(context, shape) {
            // background color
            context.beginPath();
            context.arc(0, 0, shape.attrs.radius || 0, 0, Math.PI * 2, false);
            context.closePath();
            context.fillStyle = source.colors.primary;
            context.fill();
            context.arc(0, 0, shape.attrs.radius || 0, 0, Math.PI * 2, false);
            context.fillStrokeShape(shape);
        }
    });
    orb.position(state.stage.getPointerPosition());

    orb.on('dragmove', onNodeDragmove)
    orb.on('click', onNodeClick);
    // 
    state.layer.add(orb);
    store.commit('spell/addCore', {id, source});
}

const addElementNode = element => {
    let id = uuid();

    var circle = new Konva.Circle({
        id,
        name: 'element',
        radius: 20,
        fill: element.colors.primary,
        shadowColor: element.colors.secondary,
        shadowBlur: 5,
        draggable: true,
    });
    circle.position(state.stage.getPointerPosition());
    //
    circle.on('dragmove', onNodeDragmove);
    circle.on('click', onNodeClick);
    //
    state.layer.add(circle);
    store.commit('spell/addApex', {id, element});
    audio.play('element-drop');
}

const updateConnections = () => {
    state.connections.forEach((connection) => {
        connection.lineNode.points(getConnectorPoints([
            {
                pos: connection.nodes[0].getAbsolutePosition(),
                radius: connection.nodes[0].getAttr('radius')
            },
            {
                pos: connection.nodes[1].getAbsolutePosition(),
                radius: connection.nodes[1].getAttr('radius')
            }
        ]));
    });
}

const snapToStage = (node) => {
    let stageSize = state.stage.size();
    let min_y = node.height() / 2,
        max_y = stageSize.height - node.height() / 2;
    let min_x = node.width() / 2,
        max_x = stageSize.width - node.width() / 2;
    node.y(Math.min(Math.max(min_y, node.y()), max_y));
    node.x(Math.min(Math.max(min_x, node.x()), max_x));
}


const getConnectorPoints = ([from, to]) => {
    const offset = 5;
    let {pos: fromPos, radius: fromR} = from,
        {pos: toPos, radius: toR} = to;
    fromR += offset;
    toR += offset;
    const dx = toPos.x - fromPos.x;
    const dy = toPos.y - fromPos.y;
    let angle = Math.atan2(-dy, dx);

    return [
        fromPos.x + -fromR * Math.cos(angle + Math.PI),
        fromPos.y + fromR * Math.sin(angle + Math.PI),
        toPos.x + - toR * Math.cos(angle),
        toPos.y + toR * Math.sin(angle),
    ];
}