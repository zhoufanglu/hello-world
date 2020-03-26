<template>
    <div>
        <h2>我是孙子组件com_c</h2>
    </div>
</template>
<script>
    export default {
        name: 'comc',
        data() {
            return {}
        },
        methods: {
        },
        components: {},
        mounted() {
           console.log('我是孙子组件的attr',this.$attrs)
        }
    }
</script>
<style>
</style>
