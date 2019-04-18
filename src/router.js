import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//import page
const error_404 = () => import('@/page/special/error_404.vue')
const home = ()=> import('@/page/home.vue')
const test = ()=> import('@/page/test.vue')
//special
const refresh = ()=> import('@/page/special/refresh.vue')


export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: home
    },
    {
      path:'*',
      name:'Error_404',
      component: error_404
    },
    {
      path:'/test',
      name:'Test',
      component: test
    },
    {
      path:'/refresh',
      name:'refresh',
      component: refresh
    }
  ]
})
