import Vuex from 'vuex'

export default new Vuex.Store({
  state() {
    return {
      isErrorPage: false
    }
  },
  mutations: {
    setErrorPage (state, is) {
      state.isErrorPage = is
    }
  },
  getters: {
    getIsErrorPage (state) {
      return state.isErrorPage
    }
  }
})
