<template>
    <div>
        <h1>401页面</h1>
        <h2>你没有权限去该页面</h2>
        <h6>如有不满请联系你领导</h6>
        <h2 @click="goLogin">请先登录</h2>
        <h3>{{time}}秒后自动跳转到登录界面</h3>
    </div>
</template>
<script>
  import qs from 'qs'
  export default {
    name: '',
    data(){
      return {
        time:3,
        interval:'',
        redirect:''
      }
    },
    methods:{
      goLogin(){
        this.$router.replace({path:'/login',query:{redirect:this.redirect}})
      }
    },
    mounted(){
      //获取原来点击的路由地址
      this.redirect = qs.parse(this.$route.fullPath.split('?')[1]).redirect
      this.interval = setInterval(()=>{
        this.time--
      },1000)
    },
    watch:{
      time(val,oldVal){
        if(val === 0){
            clearInterval(this.interval)
            this.goLogin()
        }
      }
    }
  }
</script>
<style>
</style>
