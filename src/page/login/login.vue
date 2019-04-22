<template>
    <div>
        <h3>登录</h3>
        <button @click="login">点我登录</button>
    </div>
</template>
<script>
  import {mapState,mapMutations } from 'vuex';
  export default {
    name: '',
    data() {
      return {
        redirect: null
      }
    },
    methods: {
      login(){
        let param ={}
        this.$api.post(
          '111',
          param,
        )
        this.changeLogin(true)
        this.changeToken(true)
        let path = this.redirect?this.redirect:'/home'
        this.$router.replace({
          path: path
        })
      },
      ...mapMutations(['changeLogin','changeToken'])
    },
    components: {},
    computed:{
      ...mapState(['loginSuccess','token',])
    },
    mounted() {
      this.redirect = this.$route.query.redirect
      if(this.token){
        this.$router.go(-1)
      }
    }
  }
</script>
<style>
</style>
