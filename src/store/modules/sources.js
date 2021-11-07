
import {getSources} from '../../config/sources';
const state = () => ({
    sources: getSources()
});

const mutations = {

}

const getters = {
    getSourceById: state => id => {
        return state.sources.find(s => s.id === id);
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