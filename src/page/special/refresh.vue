<template>
    <div class="refresh" v-if="!networkSuccess">
        <h3>糟糕，断网了！</h3>
        <button @click="onRefresh()">点我刷新</button>
    </div>
</template>
<script>
  import {mapState } from 'vuex';
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {
      onRefresh(){
        this.$router.go(-1)
      },
    },
    computed:{
      ...mapState(['networkSuccess'])
    },
    components: {},
  }
</script>
<style>
</style>
