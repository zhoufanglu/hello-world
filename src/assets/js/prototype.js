import Vue from 'vue'
//接口配置
import api from '@/request/api'

/**
 * element-ui
 * 按需引入
 */
import '@/assets/scss/element/element-variables.scss'
import { Button, Form ,Radio, Input, Select ,Checkbox, FormItem, Message} from 'element-ui';
Vue.use(Button)
Vue.use(Form)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(FormItem)
//Vue.use(Message)
Vue.component(Message.name, Message)

const prototype = ()=>{
  Vue.prototype.$api = api
  Vue.prototype.$message = Message
}
export default prototype

