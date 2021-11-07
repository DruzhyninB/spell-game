
import {getShapes} from '../../config/shapes';

const state = () => ({
    shapes: getShapes()
});

const mutations = {}

const getters = {
    getShapeById: state => id => {
        return state.shapes.find(s => s.id === id);
    }
}

const actions = {}


export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}