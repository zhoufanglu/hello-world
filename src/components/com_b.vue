<template>
    <div>
        <h2>我是子组件com_b</h2>
        <comC v-bind="$attrs"></comC>
    </div>
</template>
<script>
    import com_c from "./com_c.vue";
    export default {
        //props: ['test3Val_1'],
        inheritAttrs: false,//使得子组件不会继承父组件没有在props内声明的参数
        components:{
            comC:com_c
        },

        name: '',
        data() {
            return {}
        },
        methods: {},
        mounted() {
            console.log('子组件的attrs', this.$attrs)
        }
    }
</script>
<style>
</style>
