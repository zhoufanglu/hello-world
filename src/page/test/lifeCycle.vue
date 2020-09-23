<template>
    <div class="p-name">
        <h1>生命周期测试</h1>
        <lifeCycleComponent></lifeCycleComponent>
    </div>
</template>
<script>
    import lifeCycleComponent from "./components/lifeCycleComponent.vue";
  export default {
    name: '',
    components: {lifeCycleComponent},
    data() {
      return {}
    },
    created() {
      console.log('父组件created')
    },
    mounted() {
      console.log('父组件mounted')
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
    .p-name {
    }
</style>
