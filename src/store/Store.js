import {createStore} from 'vuex';

import {getElements} from '../config/elements';
import {getSources} from '../config/sources';
import {getBases} from '../config/bases';

export default createStore({
    state: {
        elements: getElements(),
        sources: getSources(),
        bases: getBases(),

        loaded:{
            audio:false
        },

        //Spell
        base: {
            type: '',
            source: null,
            apexes: {}, // {id:{apex}}
            synergies: {}, // {id:{apex}},
            sources: {}, // {id:{source}}
        },
        //Assets
    },
    mutations: {
        loaded(state, {system, loaded} ){
            state.loaded[system] = loaded;
        },
        addElement (state, payload) {
            state.elements.push(payload);
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
            let elementObj = state.elements.find(e => e.id === element);
            state.base.apexes[apex].element = elementObj;
        },
        setElementToSynergy (state, {synergy, element}) {
            state.base.synergies[synergy].element = element;
        },
        setElementToSource (state, {source, element}) {
            let sourceObj = state.sources.find(e => e.id === element);
            state.base.sources[source].element = sourceObj;
        },
    },
    getters: {
        isLoading: state => {
            return state.loaded.audio;
        },
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
            state.base.sources = base.sources.reduce((acc, source) => ({
                ...acc,
                [source.id]: {
                    ...source,
                    element: null
                }
            }), {});
        },

        dropElement ({commit, dispatch}, {apex, element}) {
            commit('setElementToApex', {apex, element});
            dispatch('digestSynergies');
        },

        dropSource ({commit, dispatch}, {source, element}) {
            commit('setElementToSource', {source, element});
        },

        digestSynergies ({commit, state}) {
            Object.keys(state.base.synergies).forEach(synergy => {

                let parentsIds = state.base.synergies[synergy].parents;
                let parents = [
                    state.base.apexes[parentsIds[0]],
                    state.base.apexes[parentsIds[1]],
                ];
                if (parents[0]?.element && parents[1]?.element) {
                    commit('setElementToSynergy', {synergy, element: 'red'})
                }
            })
        }
    }
});