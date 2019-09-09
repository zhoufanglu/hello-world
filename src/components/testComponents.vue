<template>
    <div class="test-components">
        <h4>this is slot</h4>
        <div style="border: solid 1px blue">
            <label>input test</label>
            <input type="text" v-model="inputVal">
        </div>
        <slot name="footer" :val="val">
        </slot>
    </div>
</template>
<script>
  export default {
    name: 'testComponents',
    data(){
      return{
        num:100,
        header:'子组件的头部消息',
        val:789,
        inputVal:''
      }
    },
    methods:{

    },
    mounted() {
      setInterval(() => {
        this.num--
      }, 1000)

      this.$on('fnTest', (val) => {
        console.log(26, val)
      })
    }
  }

</script>
<style lang="scss">
    .test-components{
        margin-top: 30px;
        border: solid 1px black;
    }
    .child-item{
        color: red;
    }
</style>
