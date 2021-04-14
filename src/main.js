import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import './assets/js/rem'

import './assets/iconFont/iconfont.css'

import tagCloud from 'v-tag-cloud'
Vue.use(tagCloud)

/**
 *mock
 */

if(process.env.NODE_ENV === 'development'){
  const MockFn = require('@/assets/js/mock/mockServer')
  //import MockFn from '@/assets/js/mock/mockServer.js'
  MockFn.default(true)
  //MockFn(true)
}

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
  components: { App },
  render: h => h(App)
}).$mount('#app')

