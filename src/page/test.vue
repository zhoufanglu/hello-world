<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="test">
        <div>test</div>
        <router-link to="/home">goHome</router-link>
        <testComponents>
          <template v-slot:footer="slotProps">
              <div>父组件的元素</div>
              {{slotProps.val}}
          </template>
        </testComponents>

        <div id="root">
            <input type="text" v-model="firstName"><br>
            <input type="text" v-model="lastName">
            <p>{{fullName}}</p>
            <p>{{count}}</p>
        </div>

    </div>
</template>
<script>
  import testComponents from '@c/testComponents.vue'
  import {getStore} from "@/request/api";
  //mixins 定义个对象（优先级全局mixins>局部mixins>局部mixins，全局定义mixins不要+s）
  const countConsole ={
    created(){
      //console.log(26,this);
      this.change()
      this.apiTest()
    },
    methods:{
      change(){
        //console.log('我是mixins');
      },
      apiTest(){
        getStore({
          q:'store',
          code:'utf-8'
        }).then((res)=>{
          console.log(39,res);
        })
      }
    }
  }
  export default {
    name: '',
    mixins:[countConsole],
    data(){
      return{
        firstName:'',
        lastName:'',
        count:0
      }
    },
    methods: {
      go() {
        this.$router.push({
          path: '/home'
        })
      }
    },
    mounted(){
      //this.change()
      //console.log(47,this.mixins);
    },
    computed:{
      fullName(){
        return this.firstName+ ' '+this.lastName
      }
    },
    watch:{
      fullName(newVal,oldVal){
        this.count++
      }
    },
    components:{
      testComponents
    }
  }
</script>
<style lang="scss">
    .test{

    }
</style>
