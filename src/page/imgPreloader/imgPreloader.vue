<template>
  <div class="p-img-preloader">
    <img
        width="500"
        height="500"
        v-for="(i,index) in list"
        :key="index"
        :src="i" alt=""
    >
  </div>
</template>
<script>
import imgPreloaderList from '../../imgPreloader/imgPreloaderList'
export default {
  name: '',
  components: {},
  data() {
    return {
      list: []
    }
  },
  created() {
    this.list = [...imgPreloaderList]
  },
  mounted() {
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.p-name {
}
</style>
