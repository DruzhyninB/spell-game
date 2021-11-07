<script setup>
import { reactive, onMounted, ref, inject } from "vue";
import { useStore } from "vuex";
import Konva from "konva";
import { v4 as uuid } from "uuid";
import {} from "vue";

import orbPattern from "../../assets/orb-pattern.png";

onMounted(function () {
    initStage({
        container: "spell-canvas",
        width: canvasWrapper.value.offsetWidth,
        height: canvasWrapper.value.offsetHeight,
    });
});

const state = reactive({
    stage: null,
    layer: null,
    selectedNode: null,
    selectedLink: null,
    connections: [], // {lineNode, nodes}
    // Context menu
    isContextMenuShown: false,
    contextMenuPosition: { top: 0, left: 0 },
});

const store = useStore();
const audio = inject("audio");
const canvasWrapper = ref(null);

// -------------------------------------------------

const clearOrbPattern = new Image();
clearOrbPattern.src = orbPattern;

const initStage = ({ container, width, height, hoverHandle }) => {
    state.stage = new Konva.Stage({
        id: "stage",
        container,
        width,
        height,
    });
    state.layer = new Konva.Layer();
    state.stage.add(state.layer);
    state.stage.on("contextmenu", onStageContextmenuHandler);
    state.stage.on("mousemove", onStageMousemoveHandler);
    state.stage
        .container()
        .addEventListener("dragover", (e) => e.preventDefault()); // !important
    state.stage.container().addEventListener("drop", onStageDropHandler);

    document.addEventListener("click", resetContextMenu);
};

const removeSelectedNode = () => {
    if (state.selectedNode) {
        removeNode(state.selectedNode);
    }
};

const linkSelectedNode = () => {
    if (state.selectedNode) {
        let lineId = uuid();
        var lineNode = new Konva.Line({
            points: getConnectorPoints([
                {
                    pos: state.selectedNode.getAbsolutePosition(),
                    radius: state.selectedNode.getAttr("radius"),
                },
                {
                    pos: state.stage.getPointerPosition(),
                    radius: 5,
                },
            ]),
            id: lineId,
            name: "connection",
            stroke: "black",
            strokeWidth: 2,
            lineCap: "round",
            lineJoin: "round",
        });
        state.selectedLink = {
            nodes: [state.selectedNode],
            lineNode,
        };
        state.layer.add(lineNode);
    }
};

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
};

const resetContextMenu = () => {
    state.isContextMenuShown = false;
    state.selectedNode = null;
};

const onNodeDragMove = (event) => {
    snapToStage(event.target);
    updateConnections();
};

const onNodeDragEnd = (event) => {
    checkCollision(event.target);
};

const onNodeHover = (event) => {
    let target =
        event.type === "mouseenter"
            ? event.target.getAttr("element") || event.target.getAttr("source")
            : false;
    store.dispatch("dashboard/setTarget", { target });
};

const onStageMousemoveHandler = () => {
    // update points of selected link
    if (state.selectedLink) {
        state.selectedLink.lineNode.points(
            getConnectorPoints([
                {
                    pos: state.selectedLink.nodes[0].getAbsolutePosition(),
                    radius: state.selectedLink.nodes[0].getAttr("radius"),
                },
                {
                    pos: state.stage.getPointerPosition(),
                    radius: 5,
                },
            ])
        );
    }
};

const onStageContextmenuHandler = (event) => {
    event.evt.preventDefault();
    if (event.target.id() === "stage") {
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
    };
};

const onStageDropHandler = (event) => {
    event.preventDefault();
    state.stage.setPointersPositions(event);
    let payload = JSON.parse(event.dataTransfer.getData("payload"));

    switch (payload.type) {
        case "element": {
            addElementNode(payload.element);
            break;
        }
        case "source": {
            addCoreNode(payload.source);
            break;
        }
        case "shape": {
            addShapeNode(payload.shape);
            break;
        }
    }
};

// --------------- Util -------------------------

const addCoreNode = (source) => {
    let id = uuid();

    var node = new Konva.Shape({
        id,
        source,
        name: "source",
        radius: 50,
        width: 100,
        height: 100,
        draggable: true,
        fillPatternImage: clearOrbPattern,
        fillPatternOffset: { x: 250, y: 250 },
        fillPatternScale: { x: 0.2, y: 0.2 },
        fillPatternRepeat: "no-repeat",
        shadowColor: source.colors.secondary,
        shadowBlur: 5,
        sceneFunc: function (context, shape) {
            // background color
            context.beginPath();
            context.arc(0, 0, shape.attrs.radius || 0, 0, Math.PI * 2, false);
            context.closePath();
            context.fillStyle = source.colors.primary;
            context.fill();
            context.arc(0, 0, shape.attrs.radius || 0, 0, Math.PI * 2, false);
            context.fillStrokeShape(shape);
        },
    });
    node.position(state.stage.getPointerPosition());

    node.on("dragmove", onNodeDragMove);
    node.on("dragend", onNodeDragEnd);
    node.on("mouseenter mouseleave", onNodeHover);
    node.on("click", onNodeClick);
    //
    state.layer.add(node);
    store.commit("spell/addCore", { id, source });
};

const addShapeNode = (shape) => {
    let id = uuid();

    var node = new Konva.RegularPolygon({
        id,
        name: "shape",
        sides: 6,
        radius: 40,
        shape,
        fill: 'gray',
        shadowBlur: 5,
        draggable: true,
    });
    node.position(state.stage.getPointerPosition());
    //
    node.on("dragmove", onNodeDragMove);
    node.on("dragend", onNodeDragEnd);
    node.on("mouseenter mouseleave", onNodeHover);
    node.on("click", onNodeClick);
    //
    state.layer.add(node);
    store.commit("spell/addShape", { id, shape });
};
const addElementNode = (element) => {
    let id = uuid();

    var node = new Konva.Circle({
        id,
        name: "element",
        radius: 20,
        element,
        fill: element.colors.primary,
        shadowColor: element.colors.secondary,
        shadowBlur: 5,
        draggable: true,
    });
    node.position(state.stage.getPointerPosition());
    //
    node.on("dragmove", onNodeDragMove);
    node.on("dragend", onNodeDragEnd);
    node.on("mouseenter mouseleave", onNodeHover);
    node.on("click", onNodeClick);
    //
    state.layer.add(node);
    store.commit("spell/addApex", { id, element });
    audio.play("element-drop");
};

const removeNode = (node) => {
    switch (node.name()) {
        case "element": {
            store.commit("spell/removeApex", { id: node.id() });
            break;
        }
    }
    // Remove node
    node.destroy();

    // Remove node's connections
    for (const connection of state.connections) {
        if (connection.nodes.includes(node)) {
            connection.lineNode.destroy();
            connection.lineNode = null;
        }
    }

    // Clean remove connections
    state.connections = state.connections.filter((c) => c.lineNode);
};

const collide = (node1, node2) => {
    let elements = [node1.getAttr("element"), node2.getAttr("element")];

    let newElement = store.getters["elements/getElementByParents"](elements);

    if (newElement) {
        removeNode(node1);
        removeNode(node2);
        addElementNode(newElement);
    }
};

const updateConnections = () => {
    state.connections.forEach((connection) => {
        connection.lineNode.points(
            getConnectorPoints([
                {
                    pos: connection.nodes[0].getAbsolutePosition(),
                    radius: connection.nodes[0].getAttr("radius"),
                },
                {
                    pos: connection.nodes[1].getAbsolutePosition(),
                    radius: connection.nodes[1].getAttr("radius"),
                },
            ])
        );
    });
};

const checkCollision = (target) => {
    if (target.getAttr("name") === "element") {
        const tR = target.getAttr("radius"),
            { x: tX, y: tY } = target.getAbsolutePosition();
        let actors = state.stage.find(".element");

        for (const actor of actors) {
            if (actor.id() === target.id()) continue;

            const aR = actor.getAttr("radius"),
                { x: aX, y: Ay } = actor.getAbsolutePosition();

            if (getDistance(tX, tY, aX, Ay) < tR + aR) {
                collide(target, actor);
            }
        }
    }
};

const snapToStage = (node) => {
    let stageSize = state.stage.size();
    let min_y = node.height() / 2,
        max_y = stageSize.height - node.height() / 2;
    let min_x = node.width() / 2,
        max_x = stageSize.width - node.width() / 2;
    node.y(Math.min(Math.max(min_y, node.y()), max_y));
    node.x(Math.min(Math.max(min_x, node.x()), max_x));
};

const getConnectorPoints = ([from, to]) => {
    const offset = 5;
    let { pos: fromPos, radius: fromR } = from,
        { pos: toPos, radius: toR } = to;
    fromR += offset;
    toR += offset;
    const dx = toPos.x - fromPos.x;
    const dy = toPos.y - fromPos.y;
    let angle = Math.atan2(-dy, dx);

    return [
        fromPos.x + -fromR * Math.cos(angle + Math.PI),
        fromPos.y + fromR * Math.sin(angle + Math.PI),
        toPos.x + -toR * Math.cos(angle),
        toPos.y + toR * Math.sin(angle),
    ];
};
const getDistance = (x1, y1, x2, y2) => {
    const { floor, sqrt } = Math;
    return floor(sqrt(pow2(y2 - y1) + pow2(x2 - x1)));
};
const pow2 = (n) => Math.pow(n, 2);
</script>

<template>
    <div class="spell-canvas__wrapper">
        <div ref="canvasWrapper" id="spell-canvas"></div>
        <div
            ref="contextMenu"
            class="context-menu"
            v-show="state.isContextMenuShown"
            :style="state.contextMenuPosition"
        >
            <button @click="linkSelectedNode">Связать</button>
            <button @click="removeSelectedNode">Убрать</button>
        </div>
    </div>
</template>
 
<style scoped>
#spell-canvas {
    width: 75%;
    height: 75%;
    display: block;
    position: relative;
    z-index: 10;
}
.spell-canvas__wrapper:after {
    content: "";
    display: block;
    width: 97%;
    height: 100%;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url("/src/assets/spell-canvas.png");
}
.spell-canvas__wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.context-menu {
    position: absolute;
    background-color: white;
    box-shadow: 0 0 5px grey;
    border-radius: 3px;
    z-index: 20;
}

.context-menu button {
    width: 100%;
    background-color: white;
    border: none;
    margin: 0;
    padding: 10px;
}

.context-menu button:hover {
    background-color: lightgray;
}
</style>
