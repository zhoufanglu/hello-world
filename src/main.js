import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//接口配置
import api from '@/request/api/index'
Vue.prototype.$api = api
//vant
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*Vue.directive('qfocus',{
  inserted(el){
    el.focus()
  }
});*/
