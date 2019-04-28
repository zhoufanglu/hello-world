import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:false,
    userInfo:{
      isLogin: false,
      userName: '',
      password: ''
    },
    networkSuccess: true, //是否断网
    //countTest: 0, //测试计数
  },
  mutations: {
    changeNetwork(state,val){
      state.networkSuccess = val
    },
    CHANGE_USER_INFO(state,val) {
      state.userInfo = val
    },
    changeToken(state,val){
      state.token = val
    },
    INCREMENT(state){
        //state.countTest++
    }
  },
  actions: {
    increment( {commit } ){
        setTimeout(()=>{
          commit('INCREMENT')
        },1000)
    },
    changeUserInfo( { commit },val ){
      commit('CHANGE_USER_INFO',val)
    }
  }
})
