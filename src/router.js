import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//import page
const error_404 = () => import('@/page/errorPage/error_404.vue')
const error_401 = () => import('@/page/errorPage/error_401.vue')
const home = ()=> import('@/page/home.vue')
const test = ()=> import('@/page/test/test.vue')
const login = ()=>import('@/page/login/login.vue')
//special
const refresh = ()=> import('@/page/special/refresh.vue')


export default new Router({
  routes: [
    {
      path:'/',
      redirect:{name:'login'}
    },
    {
      path: '/home',
      name: 'Home',
      meta:{
        requiresAuth:true,//是否要登录后查看
        keepAlive: false
      },
      component: home
    },
    {
      path:'*',
      name:'Error_404',
      component: error_404
    },
    {
      path:'/401',
      name:'Error_401',
      component: error_401
    },
    {
      path:'/test',
      name:'Test',
      hidden:true,
      meta:{
        requiresAuth:true,
        keepAlive:true
      },
      component: test
    },
    {
      path:'/refresh',
      name:'refresh',
      component: refresh
    },
    {
      path:'/login',
      name:'login',
      component: login
    }
  ]
})
