<template>
    <div class="header-content">
        <button @click="logout">注销</button>
    </div>
</template>
<script>
    import {mapState,mapMutations,mapGetters } from 'vuex';
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {
      logout(){
        this.changeLogin(false)
        this.changeToken(false)
        this.$router.replace({
          path:'login'
        })
      },
      ...mapMutations(['changeLogin','changeToken'])
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
