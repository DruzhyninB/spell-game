// this file will contain all speciall spells configurations
export const getFormulas = () => {
    return [
        ...stricts.map(o => new StrictFormula(o)),
        ...generics.map(o => new GenericFormula(o)),
    ]
}

/**
 * Generic jobs are special they relay on dynamic elements and generate spells dynamicaly
 */
let generics = [{
    name: 'Fireball',
    description: 'Бросает сгусток огня в виде шара',
    schema:{
        connections: [
            ['mana', 'fire'],
            ['fire', 'skillshot']
        ],
        sources: ['any'],
        elements: ['fire'],
        shapes: ['skillshot']
    }
}];
let stricts = [{
    name: 'Teleport',
    description: 'Teleport the object on a distance',
    schema:{
        connections: [
            ['mana', 'fire'],
            ['fire', 'skillshot']
        ],
        sources: ['mana'],
        elements: ['fire'],
        shapes: ['target', 'area']
    }
}];



class Formula {
    constructor({ name, schema }) {
        this.name = name;
        this.schema = schema;
        this.connections = schema.connections;
        this.sources = schema.sources;
        this.elements = schema.elements;
        this.shapes = schema.shapes;
    }
}

class GenericFormula extends Formula {
    constructor(options) {
        super(options);
        this.type = 'generic';
    }

    test() { }
}

class StrictFormula extends Formula {
    constructor(options) {
        super(options);
        this.type = 'strict';
    }

    test(testSchema) {
        const { connections, elements, sources, shapes } = this;
        // check connections
        const { connections: tConnections } = testSchema;
        let hasEqualConnections = connections.length === tConnections.length;
        let hasSameConnections = connections.every(connection => {
            return tConnections.find(conn => conn.every(elem => connection.includes(elem)));
        });
        if (!hasEqualConnections || !hasSameConnections) {
            return false;

        }
        // check elements
        const { elements: tElements } = testSchema;
        let hasEqualElements = elements.length === tElements.length;
        let hasSameElements = elements.every(element => {
            return tElements.includes(element)
        })
        if (!hasEqualElements || !hasSameElements) {
            return false;
        }
        // check sources
        const { sources: tSources } = testSchema;
        let hasEqualSources = sources.length === tSources.length;
        let hasSameSources = elements.every(element => {
            return tElements.includes(element)
        })
        if (!hasEqualSources || !hasSameSources) {
            return false;
        }
        // check shapes
        const { shapes: tShapes } = testSchema;
        let hasEqualShapes = shapes.length === tShapes.length;
        let hasSameShapes = shapes.every(element => {
            return tShapes.includes(element)
        })
        if (!hasEqualShapes || !hasSameShapes) {
            return false;
        }

        return this;
    }
}



