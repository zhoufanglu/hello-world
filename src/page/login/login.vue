<template>
    <div class="p-login">
        <div style="margin: 20px;"></div>
        <div class="p-form" >
            <el-form label-position="left"
                     label-width="60px"
                     :model="formLabelAlign"
                     ref="loginForm"
                     :rules="rules"
            >
                <h3>登录</h3>
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="formLabelAlign.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="formLabelAlign.password"></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
                <el-button class="login-button" @click="login('loginForm')" :loading="loading">登录</el-button>
            </el-form>
        </div>
        <div @click="$router.push({path:'/imgPreloader'})">go imgUploader</div>
    </div>
</template>
<script>
  import {mapState,mapActions } from 'vuex'
  import { validUsername } from '@/assets/js/utils/validate'
  export default {
    name: 'login',
    beforeRouteEnter :(to,from,next)=>{
      console.time('loadTime')
      next()
    },
    data() {
      const checkUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不能为空！'))
        }
        if (!validUsername(value)) {
          callback(new Error('用户名错误！'))
        } else {
          callback()
        }

      }
      const checkPassword =(rule, value, callback)=>{
         callback()
      }
      return {
        redirect: null,
        loading:false,
        formLabelAlign: {
          userName: 'admin',
          password: '123456',
          type: ''
        },
        rules: {
          userName:[
            {validator: checkUserName,trigger: 'blur'},
          ],
          password:[
            { validator: checkPassword,trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      login(formName){
        this.$refs[formName].validate((valid)=>{
           if(valid){
             this.loading = true
             this.$api.user.login(
               '/login',
               {
                 userName: this.formLabelAlign.userName,
                 password: this.formLabelAlign.password
               },
             ).then((res)=>{
               this.loading = false
               this.changeUserInfo({
                 isLogin: true,
                 userName: this.formLabelAlign.userName,
                 password: this.formLabelAlign.password
               })
               this.changeToken(true)
               let path = this.redirect?this.redirect:'/home'
               this.$router.replace({
                 path: path
               })
             }).catch((err)=>{
               this.loading = false
             })
           }else{

           }
        })

      },
      ...mapActions(['changeUserInfo','changeToken'])
    },
    components: {},
    computed:{
      ...mapState(['token',])
    },
    mounted() {
      this.redirect = this.$route.query.redirect
      if(this.token){
        this.$router.go(-1)
      }
      this.$nextTick(_=>{
        console.timeEnd('loadTime')
      })
    }
  }
</script>
<style lang="scss">
    .p-login{
        .p-form{
            width: 800px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            .login-button{
                width: 100px;
            }
        }
    }
</style>
