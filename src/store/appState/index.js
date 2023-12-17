const initialState = { 
    isLogged: false,
    login: '',
};

const appState = { 
    namespaced: true,
    state: initialState,
    mutations: { 
        setIsLogged(state, value) {
            state.isLogged = value;
        },
        setLogin(state, value) {
            state.login = value;
        }
    },
    actions: { 
        setIsLogged({ commit }) {
            commit('setIsLogged')
        },
        setLogin({ commit }) {
            commit('setLogin')
        }
    },
    getters: { 
        getIsLogged: (state) => state.isLogged,
        getLogin: (state) => state.login,
    } 
};

export default appState;