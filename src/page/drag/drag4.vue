<template>
  <div>
    <input type="text" @input="onInput">
    <h1>{{ testFn() }}</h1>
    <el-input></el-input>
    <input onkeyup="value=value.replace(/[^0-9]/g,'')" onpaste="value=value.replace(/[^0-9]/g,'')" oncontextmenu = "value=value.replace(/[^0-9]/g,'')">
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    onInput: _.debounce(function () {
      // console.log(this)
       this.testFn('xx')
    }, 1000),
    testFn(val) {
      console.log(22, val)
      return val
      //console.log(val)
    }
  }
}
</script>

<style scoped>
</style>
