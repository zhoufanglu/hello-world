<template>
    <div>
        <h2>test_2</h2>
        <ul>
            <li v-for="(i,index) in list" :key="index">{{ i.name | filtersName }}</li>
        </ul>
    </div>
</template>

<script>
  import {formatDateTime} from "../../assets/js/utils/validate";
  export default {
    name: "test_2",
    data() {
      return {
        list:[
          {name:'lfz'},
          {name:'sxy'},
          {name:'ljd'},
          {name:'xjy'},
        ]
      }
    },
    methods: {

    },
    created(){
      console.log('created')
    },
    mounted() {
        this.list = []
    },
    computed:{
      computeVal(){
        return (val)=>{
          console.log('computed')
          return val.toUpperCase()
        }
      }
    },
    filters:{
      filtersName(name){
        return name.toUpperCase()
      }
    },
    watch:{
      list(){
        console.log(48,this)
      }
    }

  }
</script>
<div>sds</div>
<style lang="scss" scoped>

</style>