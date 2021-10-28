import {createStore} from 'vuex';

// Modules
import elements from './modules/elements';
import sources from './modules/sources';
import bases from './modules/bases';
import spell from './modules/spell';

export default createStore({
    modules: {
        elements,
        sources,
        bases,
        spell
    },
    state: {
        loaded: {
            audio: false
        },
        // Dashboard
        dashboard: {
            element: null
        }
    },
    mutations: {
        loaded (state, {system, loaded}) {
            state.loaded[system] = loaded;
        },
        setDashboardElement (state, {element}) {
            console.log('setted', element);
            state.dashboard.element = element;
        }
    },
    getters: {
        isLoading: state => {
            return state.loaded.audio;
        }
    },
    actions: {
        dropElement ({commit, dispatch, getters}, {apexId, elementId}) {
            commit('spell/setElementToApex', {
                apexId,
                element: getters['elements/getElementById'](elementId)
            });
            dispatch('spell/digestSynergies');
        },

        dropSource ({commit, getters}, {coreId, sourceId}) {
            commit('spell/setSourceToCore', {
                coreId,
                source: getters['source/getSourceById'](sourceId)
            });
        },

        // hoverElement ({commit, getters}, {elementId}) {
        //     commit('setDashboardElement', {
        //         element: elementId ? getters.getElementById(elementId) : false
        //     })
        // }

    }
});