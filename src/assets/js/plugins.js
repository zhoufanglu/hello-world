import router from '@/router'
//nprogress
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
//vuex
import store from '@/store'

import {Message} from 'element-ui'

nprogress.configure({
  easing: 'ease',  // 动画方式
  speed: 500,  // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

router.beforeEach((to, from , next) => {
  //未登录
  if(to.meta.requiresAuth){
    if(!store.state.userInfo.isLogin
      &&(to.path!=='/login'&&to.path!=='/401')){
      next(`/401?redirect=${to.path}`)
    }
  }
  //根据meta内的roles属性来判断有没有权限访问此路由
  if(to.meta.hasOwnProperty('roles')){
    if(to.meta.roles.includes(store.state.userInfo.userName)){
      console.log('有权限')
    }else{
      Message('没有权限进入此页面')
    }
  }
  // 每次切换页面时，调用进度条
  nprogress.start();

  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next();
});
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  nprogress.done()
})


/**
 * 保持vuex内的数据刷新不消失
 * 这个有个缺陷，当你删除或者修改了state里面的参数，1、先注释掉下面的代码，2、删除localStore里面的参数，再刷新下就好了。。
 * */
//页面加载时把localStorage的数据放入vuex
/*localStorage.getItem("vuexState(hello-world)")&&
store.replaceState(
  Object.assign(store.state,JSON.parse(localStorage.getItem("vuexState(hello-world)")))
)
//页面刷新前把vuex的数据放入localStorage
window.addEventListener("beforeunload",()=>{
  localStorage.setItem("vuexState(hello-world)",JSON.stringify(store.state))
})*/
