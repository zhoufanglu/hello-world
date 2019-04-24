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
import plugins from '@/assets/js/plugins'

/**
 * element-ui
 * 按需引入
 */
import '@/assets/scss/element/element-variables.scss'
import { Button, Select, Form ,Radio } from 'element-ui';
Vue.use(Button)
Vue.use(Form)
Vue.use(Radio)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

