import {getFormulas} from '../../config/formulas';
const state = () => ({
    formulas: getFormulas(),
    apexes: {}, // {id:{apex}}
    cores: {}, // {id:{source}}
    shapes: {}, // {id:{source}}
    connections: {}, // {id:{parents[id]}}
});

const mutations = {
    addApex(state, { id, element }) {
        state.apexes[id] = {
            ...element
        };
    },
    removeApex(state, { id }) {
        delete state.apexes[id];
    },

    addCore(state, { id, source }) {
        state.cores[id] = {
            ...source
        };
    },
    removeCore(state, { id }) {
        delete state.cores[id];
    },

    addShape(state, { id, shape }) {
        state.shapes[id] = {
            ...shape
        };
    },
    removeShape(state, { id }) {
        delete state.shapes[id];
    },

    addConnection(state, { id, connection }) {
        state.connections[id] = {
            connection,
            parents: connection.nodes.map(node => {
                return node.getAttr("payload");
            })
        };
    },
    removeConnection(state, { id }) {
        delete state.connections[id];
    },

    reset(state) {
        state.base = {};
        state.apexes = {};
        state.sources = {};
    },

}

const getters = {
    getById(state) {
        return [...state.apexes, ...state.cores].find(e => e.id === id);
    },
    getSpellSchema(state) {
        return {
            connections: Object.values(state.connections).map(c => c.parents),
            sources: Object.values(state.cores),
            elements: Object.values(state.apexes),
            shapes: Object.values(state.shapes)
        }
    }
}

const actions = {

    generateSpell({ state, getters }) {
        let spellSchema = getters['getSpellSchema'], result;

        for (const formula of state.formulas) {
            result = formula.test(spellSchema);
            if (result) break
        }

        console.log(result);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}