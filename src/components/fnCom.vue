<!--函数式组件测试-->
<template functional>
    <div>
        <h1>函数式组件测试</h1>
        <div>{{props.fnComVal}}</div>
    </div>
</template>
<script>
    export default {
       props: {
           fnComVal: {
               type: String
           }
       },
        render(createElement, context) {
           console.log(14, context)
        }
    }
</script>
<style>
</style>
