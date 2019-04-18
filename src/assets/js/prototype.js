import Vue from 'vue'
//接口配置
import api from '@/request/api/index'

const prototype = ()=>{
  Vue.prototype.$api = api
}
export default prototype

