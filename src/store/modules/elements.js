
import {getElements} from '../../config/elements';

const state = () => ({
    elements: getElements()
});

const mutations = {
    addElement (state, payload) {
        state.elements.push(payload);
    }
}

const getters = {
    getElementById: state => id => {
        return state.elements.find(e => e.id === id);
    },
    baseElements: state => {
        return state.elements.filter(e => !e.parents);
    },
    getElementByParentElements: state => (parentElements) => {
        if (parentElements[0] && parentElements[1]) {
            let elementsIds = parentElements.map(e => e.id);
            let el = state.elements.find(e => e.parents?.some(p => p.every(p => elementsIds.includes(p))));
            return el;
        } else {
            return undefined;
        }
    }
}

const actions = {

}


export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}