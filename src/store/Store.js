import {createStore} from 'vuex';

import {getElements} from '../config/elements';

export default createStore({
    state: {
        elements:getElements()
    },
    mutations: {
        addElement(state, payload) {
            state.elements.push(payload);
        }
    },
    actions: {

    }
});