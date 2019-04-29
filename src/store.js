import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import { Message } from 'element-ui'
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
    //判断是否断网
    CHANGE_NETWORK(state,val){
      if(val === false){ //若断了网/直接去断网页面
        Message({
          showClose: true,
          message: '断网了！请刷新重试。',
          type: 'error'
        })
        setTimeout(()=>{
          Message.close()
        },1000)
        router.replace({path:'/refresh'})
      }
      state.networkSuccess = val
    },
    CHANGE_USER_INFO(state,val) {
      state.userInfo = val
    },
    CHANGE_TOKEN(state,val){
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
    changeUserInfo( { commit }, val ){
      commit('CHANGE_USER_INFO', val)
    },
    changeNetwork({ commit }, val){
      commit('CHANGE_NETWORK', val)
    },
    changeToken({ commit }, val){
      commit('CHANGE_TOKEN', val)
    }
  }
})
