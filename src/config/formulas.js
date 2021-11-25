// this file will contain all speciall spells configurations
export const getFormulas = () => {
    return [
        // ...stricts.map(o => new StrictFormula(o)),
        ...generics.map(o => new GenericFormula(o)),
    ]
}

/**
 * Generic jobs are special they relay on dynamic elements and generate spells dynamicaly
 * in sources, elements, shapes there is special keyword 'any', that allows to point any entity of correspnding type
 * in connections there are three special keywords 'any_element','any_source','any_shape', that allows to point connection between proper entities.
 */
let generics = [{
    name: 'Заряд стихии',
    description: 'Бросает сгусток стихии в виде шара',
    instructions: [
        'Наполни любым источником любой элеммент',
        'Высвободи его в форме снаряда'
    ],
    schema: {
        connections: [
            ['mana', 'any_element'],
            ['any_element', 'skillshot']
        ],
        sources: ['any', 'astral'],
        elements: ['any', 'air'],
        shapes: ['any', 'skillshot']
    }
}];
// let stricts = [
//     {
//         name: 'Fireball',
//         description: 'Fireball!!!',
//         schema: {
//             connections: [
//                 ['mana', 'fire'],
//                 ['fire', 'skillshot']
//             ],
//             sources: ['mana'],
//             elements: ['fire'],
//             shapes: ['skillshot']
//         }
//     }, {
//         name: 'Teleport',
//         description: 'Teleport the object on a distance',
//         instructions: [
//             'Зафиксируй цель заклинания',
//             'Используя ману разрушь саму структуру цели на астральный эфир',
//             'Затем с помощью мощи астрала перенеси эфир со скоростью света',
//             'После маной подчени хаос что бурлит в эфире и востанови форму обьекта в указаной зоне пространства',
//         ],
//         schema: {
//             connections: [
//                 ['target', 'distruction'],
//                 ['distruction', 'mana'],
//                 ['distruction', 'light'],
//                 ['astral', 'light'],
//                 ['chaos', 'light'],
//                 ['chaos', 'mana'],
//                 ['chaos', 'area'],
//             ],
//             sources: ['mana', 'astral'],
//             elements: ['distruction', 'light', 'chaos'],
//             shapes: ['target', 'area']
//         }
//     }];



class Formula {
    constructor({name, schema}) {
        this.name = name;
        this.schema = schema;
        this.connections = schema.connections;
        this.sources = schema.sources;
        this.elements = schema.elements;
        this.shapes = schema.shapes;
    }
    sorting (a, b) {
        if (typeof a === 'string' && typeof b === 'string') {
            return Formula.sortStirngs(...arguments);
        }
        if (typeof a === 'object' && typeof b === 'object') {
            return Formula.sortObjects(...arguments);
        }
    }
    static sortStirngs (a, b) {
        if (a === 'any') return 1;
        if (b === 'any') return -1;
        return a.localeCompare(b);
    }
    static sortObjects (a, b) {
        return a.id.localeCompare(b.id);
    }
}

class GenericFormula extends Formula {
    constructor(options) {
        super(options);
        this.type = 'generic';
    }

    test (target) {
        // Connections
        let connections = [...this.connections].sort(this.sorting);
        let connections_target = [...target.connections].sort(this.sorting);

        let hasEqualConnections = connections.length === connections_target.length;
        let hasSameConnections = connections_target.every()
        console.log(tmpConnections, tmpTConnections)

        // Elements
        let elements = [...this.elements].sort(this.sorting);
        let elements_target = [...target.elements].sort(this.sorting);

        let hasEqualElements = elements.length === elements_target.length;
        let hasSameElements = elements_target.every((telement, index) => {
            let element = elements[index];
            return element === 'any' || element === telement.id;
        });
        if (!hasEqualElements || !hasSameElements) {
            return false;
        }

        // Sources
        let sources = [...this.sources].sort(this.sorting);
        let sources_target = [...target.sources].sort(this.sorting);

        let hasEqualSources = sources.length === sources_target.length;
        let hasSameSources = sources_target.every((tsource, index) => {
            let source = sources[index];
            return source === 'any' || source === tsource.id;
        });
        if (!hasEqualSources || !hasSameSources) {
            return false;
        }

        // Shapes
        let shapes = [...this.shapes].sort(this.sorting);
        let shapes_target = [...target.shapes].sort(this.sorting);

        let hasEqualShapes = shapes.length === shapes_target.length;
        let hasSameShapes = shapes_target.every((tshape, index) => {
            let shape = shapes[index];
            return shape === 'any' || shape === tshape.id;
        });
        if (!hasEqualShapes || !hasSameShapes) {
            return false;
        }

        return this;
    }
}

class StrictFormula extends Formula {
    constructor(options) {
        super(options);
        this.type = 'strict';
    }

    test (testSchema) {
        const {connections, elements, sources, shapes} = this;

        // check connections
        const {connections: tConnections} = testSchema;
        let hasEqualConnections = connections.length === tConnections.length;
        let hasSameConnections = tConnections.every(connection => {
            let elements = connection.map(e => e.id);
            return connections.find(conn => conn.every(elem => elements.includes(elem)));
        });
        if (!hasEqualConnections || !hasSameConnections) {
            return false;
        }
        // check elements
        const {elements: tElements} = testSchema;
        let hasEqualElements = elements.length === tElements.length;
        let hasSameElements = tElements.every(element => {
            return elements.includes(element.id)
        })
        if (!hasEqualElements || !hasSameElements) {
            return false;
        }
        // check sources
        const {sources: tSources} = testSchema;
        let hasEqualSources = sources.length === tSources.length;
        let hasSameSources = tSources.every(element => {
            return sources.includes(element.id)
        })
        if (!hasEqualSources || !hasSameSources) {
            return false;
        }
        // check shapes
        const {shapes: tShapes} = testSchema;
        let hasEqualShapes = shapes.length === tShapes.length;
        let hasSameShapes = tShapes.every(element => {
            return shapes.includes(element.id)
        })
        if (!hasEqualShapes || !hasSameShapes) {
            return false;
        }
        return this;
    }
}



