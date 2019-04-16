import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'noLogin',
    loginSuccess:false,
    networkSuccess: true //是否断网
  },
  mutations: {
    changeNetworkSuccess(state,val){
      state.networkSuccess = val
    }
  },
  actions: {

  }
})
