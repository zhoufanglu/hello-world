import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//import page
const error_404 = () => import('@/page/errorPage/error_404.vue')
const error_401 = () => import('@/page/errorPage/error_401.vue')
const home = ()=> import('@/page/home.vue')
const test = ()=> import('@/page/test/test.vue')
const test2 = ()=> import('@/page/test/test_2.vue')
const test3 = ()=> import('@/page/test/test_3.vue')
const lifeCycle = ()=> import('@/page/test/lifeCycle.vue')
const login = ()=>import('@/page/login/login.vue')
const father = ()=>import('@/page/routerStudy/father.vue')
const a = ()=>import('@/page/routerStudy/children/a.vue')
const b = ()=>import('@/page/routerStudy/children/b.vue')
const c = ()=>import('@/page/routerStudy/children/c.vue')
//eventBus
const busFather = ()=>import('@/page/eventBusTest/busFather.vue')
//special
const refresh = ()=> import('@/page/special/refresh.vue')
//step
const step = ()=> import('@/page/step/stepMain.vue')

const imgPreloader = ()=> import('@/page/imgPreloader/imgPreloader.vue')

const drag = ()=> import('@/page/drag/drag.vue')
const drag2 = ()=> import('@/page/drag/drag2.vue')
const drag3 = ()=> import('@/page/drag/drag3.vue')
const drag4 = ()=> import('@/page/drag/drag4.vue')

const chart = ()=> import('@/page/charts/chart.vue')

const canvasTest = ()=> import('@/page/canvas/canvasTest.vue')
const lazyComponent = ()=> import('@/page/lazyComponent/lazyComponent.vue')



export default new Router({
  routes: [
    {
      path:'/',
      redirect:{name:'login'},
/*      beforeEnter:(to,from,next)=>{
        console.log(to);
        console.log(from);
        next();
      }*/
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
      path:'/test/:personAge',
      name:'Test',
      hidden:true,
      meta:{
        requiresAuth:false,
        keepAlive:true
      },
      component: test
    },
    {
      path:'/test_2',
      name:'Test2',
      hidden:true,
      meta:{
        requiresAuth:true,
        keepAlive:true
      },
      component: test2
    },{
      path:'/test_3',
      name:'Test3',
      hidden:true,
      meta:{
        requiresAuth: false,
        keepAlive: false
      },
      component: test3
    },{
      path:'/lifeCycle',
      name:'lifeCycle',
      hidden:true,
      meta:{
        requiresAuth: false,
        keepAlive: false
      },
      component: lifeCycle
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
    },
    {
      path:'/father',
      name:'father',
      component: father,
      children: [
        {
          path: '/a',
          meta:{
            title:'a',
            roles:['admin']
          },
          component: a
        },
        {
          path: '/b',
          meta:{
            title:'b',
            roles:['user']
          },
          component: b
        },
        {
          path: '/c',
          meta:{
            title:'c',
          },
          component: c
        }
      ]
    },
    {
      path: '/busFather',
      name: 'busFather',
      component: busFather,
    },
    {
      path: '/step',
      name: 'step',
      component: step,
    },
    {
      path: '/imgPreloader',
      name: 'imgPreloader',
      component: imgPreloader,
    },
    {
      path: '/drag',
      name: 'drag',
      component: drag,
    },
    {
      path: '/drag2',
      name: 'drag2',
      component: drag2,
    },
    {
      path: '/drag3',
      name: 'drag3',
      component: drag3,
    },
    {
      path: '/drag4',
      name: 'drag4',
      component: drag4,
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart,
    },
    {
      path: '/canvasTest',
      name: 'canvas',
      component: canvasTest,
    },
    {
      path: '/lazyComponent',
      name: 'lazyComponent',
      component: lazyComponent,
    },
  ]
})
