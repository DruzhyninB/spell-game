const state = () => ({
    apexes: {}, // {id:{apex}}
    cores: {}, // {id:{source}}
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
        }
    },
    removeCore (state, {id, source}) {
        state.cores[id] = {
            source
        }
    },
    // setElementToApex (state, {apexId, element}) {
    //     state.apexes[apexId].element = element;
    // },
    // setSourceToCore (state, {coreId, source}) {
    //     state.cores[coreId].source = source;
    // },
    reset (state) {
        state.base = {};
        state.apexes = {};
        state.sources = {};
    },

}

const getters = {

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