const state = () => ({
    apexes: {}, // {id:{apex}}
    cores: {}, // {id:{source}}
    shapes: {}, // {id:{source}}
});

const mutations = {
    addApex (state, {id, element}) {
        state.apexes[id] = {
            element
        };
    },
    removeApex (state, {id}) {
        delete state.apexes[id];
    },

    addCore (state, {id, source}) {
        state.cores[id] = {
            source
        };
    },
    removeCore (state, {id}) {
        delete state.cores[id];
    },

    addShape (state, {id, shape}) {
        state.shapes[id] = {
            shape
        };
    },
    removeShape (state, {id}) {
        delete state.shapes[id];
    },
    
    reset (state) {
        state.base = {};
        state.apexes = {};
        state.sources = {};
    },

}

const getters = {
    getById () {
        return [...state.apexes, ...state.cores].find(e => e.id === id);
    }
}

const actions = {
    digestSynergies ({commit, state, rootGetters}) {
        for (const apexId in state.apexes) {
            let apex = state.apexes[apexId];
            if (apex.parents) {
                let parentElements = [
                    state.apexes[apex.parents[0]].element,
                    state.apexes[apex.parents[1]].element
                ];
                let element = rootGetters['elements/getElementByParentElements'](parentElements);

                if (element) {
                    commit('setElementToApex', {apexId, element})
                }
            }
        }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}