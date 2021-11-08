import {createStore} from 'vuex';

// Modules
import dashboard from './modules/dashboard';
import elements from './modules/elements';
import sources from './modules/sources';
import shapes from './modules/shapes';
import spell from './modules/spell';

const store = createStore({
    modules: {
        dashboard,
        elements,
        sources,
        shapes,
        spell
    },
    state: {
        loaded: {
            audio: false
        }
    },
    mutations: {
        loaded (state, {system, loaded}) {
            state.loaded[system] = loaded;
        }
    },
    getters: {
        isLoading: state => {
            return state.loaded.audio;
        }
    },
    actions: {}
});

export default store;