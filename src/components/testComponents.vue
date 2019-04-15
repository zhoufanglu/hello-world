<template>
    <div class="test-components">
        <h4>this is slot</h4>
        <slot name="footer" val="父组件的值">
        </slot>
    </div>
</template>
<script>
  export default {
    name: '',
    data(){
      return{
        num:100,
        header:'子组件的头部消息'
      }
    },
    methods:{

    },
    mounted(){
      setInterval(()=>{
        this.num--
      },1000)
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
