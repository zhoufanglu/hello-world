import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:false,
    loginSuccess:false,
    networkSuccess: true, //是否断网
  },
  mutations: {
    changeNetwork(state,val){
      state.networkSuccess = val
    },
    changeLogin(state,val){
      state.loginSuccess = val
    },
    changeToken(state,val){
      state.token = val
    }
  },
  actions: {

  }
})
