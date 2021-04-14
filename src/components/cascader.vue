<template>
  <div class="p-cascader">
    <el-cascader
        placeholder="试试搜索：指南"
        v-model="list"
        :options="options"
        :props="{ multiple: true }"
        @change="change"
        filterable></el-cascader>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      list: [],
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {value:1, label:1}
          ]
        },
        {
          value: 'B',
          label: 'B',
          children: [
            {value:2, label:2}
          ]
        },
      ]
    }
  },
  created() {
    this.list = [["B", 2]]
  },
  mounted() {
  },
  methods: {
    change() {
      console.log(43, this.list)
    }
  }
}
</script>
<style lang="scss" scoped>
.p-name {
}
</style>
