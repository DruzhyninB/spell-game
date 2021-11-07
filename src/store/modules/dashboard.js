const state = () => ({
    target:null
});

const mutations = {
    target (state, target) {
        state.target = target?.element || target?.source || target;
    }
};

const getters = {}

const actions = {
    setTarget ({commit, rootState}, {target, id}) {
        if (id ){
            let node = rootState.getters['spell/getById'](id);
            commit('target', node);
        } else {
            commit('target', target);
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}