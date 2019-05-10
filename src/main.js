import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 *mock
 */
import MockFn from '@/assets/js/mock/mockServer.js'
MockFn(true)

import prototype from '@/assets/js/prototype'
Vue.use(prototype)
/**
 * 插件引入文件
 */
import '@/assets/js/plugins'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

