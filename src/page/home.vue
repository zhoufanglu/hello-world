<template>
    <div>
        <div>home</div>
        <router-link to="/test">
            <h3>test</h3>
        </router-link>
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
