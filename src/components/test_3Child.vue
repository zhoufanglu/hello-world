<template>
    <div>我是test_3的子组件</div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
                test_3Val: '我是test3的值'
            }
        },
        methods: {},
        components: {},
        mounted() {
            this.$emit('setTest_3Val', this.test_3Val)
        }
    }
</script>
<style>
</style>
