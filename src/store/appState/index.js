const initialState = { 
    isLogged: 'isLogged',
};

const appState = { 
    namespaced: true,
    state: initialState,
    mutations: { 
        setIsLogged(state, value) {
            state.isLogged = value;
        }
    },
    actions: { 
        setIsLogged({ commit }) {
            commit('setIsLogged')
        }
    },
    getters: { 
        getIsLogged: (state) => state.isLogged,
    } 
};

export default appState;