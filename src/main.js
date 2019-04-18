import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import prototype from '@/assets/js/prototype'
Vue.use(prototype)
import plugins from '@/assets/js/plugins'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

