
import {getElements} from '../../config/elements';

const state = () => ({
    elements: getElements()
});

const mutations = {
    addElement(state, payload) {
        state.elements.push(payload);
    }
}

const getters = {
    getElementById: state => id => {
        return state.elements.find(e => e.id === id);
    },
}

export default {
    namespaced:true,
    state,
    mutations,
    getters
}