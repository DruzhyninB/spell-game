import {createStore} from 'vuex';

import {getSynergies} from '../config/elements';
import {getSources} from '../config/sources';
import {getBases} from '../config/bases';

export default createStore({
    state: {
        elements: getElements(),
        synergies: getSynergies(),
        sources: getSources(),
        bases: getBases(),

        loaded: {
            audio: false
        },

        //Spell
        base: {
            type: '',
            source: null,
            apexes: {}, // {id:{apex}}
            synergies: {}, // {id:{apex}},
            sources: {}, // {id:{source}}
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

        resetActiveBase (state) {
            state.base = {
                type: '',
                apexes: {},
                synergies: {},
                sources: {}
            };
        },
        setElementToApex (state, {apex, element}) {
            state.base.apexes[apex].element = element;
        },
        setElementToSynergy (state, {synergy, element}) {
            state.base.synergies[synergy].element = element;
        },
        setElementToSource (state, {source, element}) {
            state.base.sources[source].element = element;
        },
        setDashboardElement (state, {element}) {
            console.log('setted', element);
            state.dashboard.element = element;
        }
    },
    getters: {
        isLoading: state => {
            return state.loaded.audio;
        },
        getSourceById: state => id => {
            return state.sources.find(e => e.id === id);
        },
        getSynergyById: state => id => {
            return state.synergies.find(e => e.id === id);
        },
        getSynergyByElements: state => (elements) => {
            console.log(elements)
            if (elements[0] && elements[1]) {
                let elementsIds = elements.map(e => e.id);
                let el = state.synergies.find(s => s.parents.some(p => p.every(p => elementsIds.includes(p))));
                console.log(el);
                return el;
            } else {
                return undefined;
            }
        }
    },
    actions: {
        setActiveBase ({commit, state}, base) {
            commit('resetActiveBase');

            state.base.type = base.type;

            state.base.apexes = base.apexes.reduce((acc, apex) => ({
                ...acc,
                [apex.id]: {
                    ...apex,
                    element: null
                }
            }), {});
            state.base.synergies = base.synergies.reduce((acc, synergy) => ({
                ...acc,
                [synergy.id]: {
                    ...synergy,
                    element: null
                }
            }), {});
            state.base.sources = base.sources.reduce((acc, source) => ({
                ...acc,
                [source.id]: {
                    ...source,
                    element: null
                }
            }), {});
        },

        dropElement ({commit, dispatch, getters}, {apex, element}) {
            commit('setElementToApex', {
                apex,
                element: getters.getElementById(element)
            });
            dispatch('digestSynergies');
        },

        dropSource ({commit, getters}, {source, element}) {
            commit('setElementToSource', {
                source,
                element: getters.getSourceById(element)
            });
        },

        digestSynergies ({commit, getters, state}) {
            Object.keys(state.base.synergies).forEach(synergy_id => {

                let parentsIds = state.base.synergies[synergy_id].parents;
                let elements = [state.base.apexes[parentsIds[0]].element, state.base.apexes[parentsIds[1]].element];
                let synergy_el = getters.getSynergyByElements(elements);
                if (synergy_el) {
                    commit('setElementToSynergy', {synergy: synergy_id, element: synergy_el})
                }
            })
        },

        hoverElement ({commit, getters}, {elementId}) {
            commit('setDashboardElement', {
                element: elementId ? getters.getElementById(elementId) : false
            })
        }

    }
});