<template>
  <div class="p-lazy-component">
    <VueLazyComponent
        @init="init"
        @beforeInit="beforeInit"
    >
      <div v-for="(i,index) in getNormalComponent" :key="index">
        <component :is="i"></component>
      </div>
    </VueLazyComponent>
  </div>
</template>
<script>
const requireComponent = require.context(
    // 其组件目录的相对路径,这里根据实际目录而定
    './component',
    // 是否查询其子目录,我这里有两层，所以true
    false,
    // 匹配基础组件文件名的正则表达式，我这里vue文件都要
    /\.vue$/
)

let modules = {} //组件模块

requireComponent.keys().forEach(ele=>{
  let key = ele.split('/')[1]
  key = key.substring(0, key.length-4) //获取文件名，不包含.vue,其实是模块名、PD1,PD2,PD3,ST1...
  modules[key] = requireComponent(ele).default //模块实例赋值
})
/**********************异步组件***********************/
/*
// 注册组件
var resCom = modules.lazyA

var promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve(resCom)
  }, 2000);
});


var LoadingComponent = {
  template: '<div>加载中显示的组件</div>'
};
var ErrorComponent = {
  template: '<div>异步组件加载失败</div>'
};

const AsyncComponent = function(){
  return {
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: promise,
    // 异步组件加载时使用的组件
    loading: LoadingComponent,
    // 加载失败时使用的组件
    error: ErrorComponent,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 200,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    // PS: 组件加载超时时间，超时表示加载失败，会展示ErrorComponent。
    // 比如在这里当我们把 Promise 中的 setTimeout 改为 4000的时候，则会展示 ErrorComponent
    timeout: 3000
  }
}
*/

import { component as VueLazyComponent } from '@xunlei/vue-lazy-component'


modules.VueLazyComponent = VueLazyComponent
console.log(65, modules)

export default {
  name: '',
  components: modules,
  //components: AsyncComponent,
  data() {
    return {
      comList: modules
    }
  },
  computed: {
    getNormalComponent() {
      delete this.comList.VueLazyComponent
      return this.comList
    }
  },
  created() {
    console.log(35, modules)
    for(let key in modules){
      console.log(36, key)
    }
  },
  mounted() {
  },
  methods: {
    init() {
      console.log('xxx')
    },
    beforeInit() {

    }
  }
}
</script>
<style lang="scss" scoped>
.p-name {
}
</style>
