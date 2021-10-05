import {createStore} from 'vuex';

import {getElements} from '../config/elements';
import {getBases} from '../config/bases';

export default createStore({
    state: {
        elements: getElements(),
        bases: getBases(),

        //Spell
        base: {
            type: '',
            apexes: {}, // {id:{apex}}
            synergies: {} // {id:{apex}}
        },
    },
    mutations: {
        addElement (state, payload) {
            state.elements.push(payload);
        },
        resetActiveBase (state) {
            state.base = {
                type: '',
                apexes: {},
                synergies: {}
            };
        },
        setElementToApex (state, {apex, element}) {
            state.base.apexes[apex].element = element;
        },
        setElementToSynergy (state, {synergy, element}) {
            state.base.synergies[synergy].element = element;
        },
    },
    getters: {
        getSynergy: state => (elements) => {
            return false;
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
        },

        dropElement ({commit, dispatch}, {apex, element}) {
            commit('setElementToApex', {apex, element});
            dispatch('digestSynergies');
        },

        digestSynergies ({commit, state}) {
            Object.keys(state.base.synergies).forEach(synergy => {

                let parentsIds = state.base.synergies[synergy].parents;
                let parents = [
                    state.base.apexes[parentsIds[0]],
                    state.base.apexes[parentsIds[1]],
                ];
                if(parents[0]?.element && parents[1]?.element) {
                    commit('setElementToSynergy', {synergy, element:'red'})
                }
            })
        }
    }
});