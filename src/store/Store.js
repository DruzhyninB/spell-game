import {createStore} from 'vuex';

import {getElements} from '../config/elements';
import {getBases} from '../config/bases';

export default createStore({
    state: {
        elements:getElements(),
        bases:getBases()
    },
    mutations: {
        addElement(state, payload) {
            state.elements.push(payload);
        }
    },
    actions: {

    }
});