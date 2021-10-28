
import {getBases} from '../../config/bases';

const state = () => ({
    bases: getBases()
});

const mutations = {

}

const getters = {
    getBaseById: state => id => {
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