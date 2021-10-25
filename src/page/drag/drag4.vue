<template>
  <div>
    <p v-for="i in list"
       :key="i"
       v-if="i>3"
    >
      {{i}}
    </p>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      list: [1,2,3,4,5]
    }
  },
  methods: {

  },
  created() {
    let imgList = []

  }
}
</script>

<style scoped>
</style>
