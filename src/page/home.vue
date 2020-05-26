<template>
    <div>
        <div>home</div>
        <!--<router-link to="/test">
            <h3>test</h3>
        </router-link>-->
        <div @click="goTest"> go to test page</div>
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
        goTest(){
            this.$router.push({
                name:'Test',
                params: { personAge: JSON.stringify([1,2,3,4,5,5])}
            })
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
