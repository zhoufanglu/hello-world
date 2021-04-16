import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import './assets/js/rem'

import './assets/iconFont/iconfont.css'

import tagCloud from 'v-tag-cloud'
Vue.use(tagCloud)

import allImgPreloader from '@/imgPreloader/imagePreloader.js'


let imgs = [
  'http://119.45.53.85/img/1.jpg',
  'http://119.45.53.85/img/2.jpg'
]
console.log('开始渲染---渲染中。。。')
const res = allImgPreloader(imgs)
res.then(val=>{
  console.log('渲染成功')
  console.log(23, val)//['图片加载成功', '图片加载成功']
})




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

