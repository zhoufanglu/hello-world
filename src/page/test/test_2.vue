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
      let data = { foo: 'foo' }
      let p = new Proxy(data, {
        get(target, key, receiver) {
          return target[key]
        },
        set(target, key, value, receiver) {
          console.log('set value',value)
          target[key] = value // ?
          return true
        }
      })

      console.log(40,p.foo='xx')
      console.log(41,p.foo='yy')


    },
    mounted() {

      this.list = []

      let handler = {
        get: function(target, name){
          console.log(35,target)
          return name in target ? target[name] : 37;
        }
      }
      let p = new Proxy({}, handler);



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
        //console.log(48,this)
      }
    }

  }
</script>
<div>sds</div>
<style lang="scss" scoped>

</style>