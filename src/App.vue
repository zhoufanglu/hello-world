<template>
  <div id="app" class="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  beforeCreate(){
    /*let count = 0;
    let imgs = [
      //用require的方式添加图片地址，直接添加图片地址的话，在build打包之后会查找不到图片，因为打包之后的图片名称会有一个加密的字符串
      'http://119.45.53.85/img/1.jpg',
      'http://119.45.53.85/img/2.jpg'
      /!*require('http://119.45.53.85/img/sky.jpg'),
      require('http://119.45.53.85/img/2.jpg'),*!/
    ]
    for (let img of imgs) {
      //生成图片对象
      let image = new Image()
      image.src = img
      console.log('加载中。。请稍等')
      //给图片增加渲染完成事件，是异步的
      image.onload = () => {
        count++
        if(imgs.length === count){ //当渲染个数与图片相同时，所有图片加载完成
          console.log(count, '所有图片渲染完成')
        }
      }
    }*/
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  min-width: 600px;
}

body {

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
