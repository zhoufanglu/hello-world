<template>
    <div class="header-content">
        <button @click="logout">注销</button>
    </div>
</template>
<script>
  import {mapActions } from 'vuex';
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {
      logout(){
        this.changeUserInfo({})
        this.changeToken(false)
        this.$router.replace({
          path:'login'
        })
      },
      ...mapActions(['changeUserInfo','changeToken'])
    },
    components: {},
    mounted() {
    }
  }
</script>
<style lang="scss">
    .header-content{
        background-color: #3A71A8;
        color: black;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
</style>
