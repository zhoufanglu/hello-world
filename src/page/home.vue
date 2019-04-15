<template>
    <div>
        <div>home</div>
        <div @click="returnPrevPage()">返回</div>
    </div>
</template>
<script>
  export default {
    name: '',
    data(){
      return{

      }
    },
    methods:{
      returnPrevPage(){
        this.$router.go(-1)
      }
    },
    mounted(){
      [3, 15, 8, 29, 102, 22].sort((a,b) => {
        return a -b
      });
    }
  }
</script>
<style>
</style>
