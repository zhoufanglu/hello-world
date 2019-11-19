<template>
    <div class="p-index">
        aaaaaaaaa
    </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {
     /* /!**
       * [1,2,3]  3 => 111 222 333 123 3...
       * @param arr 数据源
       * @param len  要拼接的长度
       *!/
      getData(arr, len) {

      }*/
      getData(arr, len) {
        const resArr = []
        let n = 0
        arr.forEach((item_1)=>{
          arr.forEach((item_2)=>{
            arr.forEach((item_3)=>{
              resArr.push(`${item_1}${item_2}${item_3}`)
            })
          })
        })
        console.log([...new Set(resArr)])
        console.log('个数',[...new Set(resArr)].length)
      }
    },
    components: {},
    mounted() {
      console.time()
      this.getData([1, 2 ,3,4,5,6,7,8,9,10,11,12,13,14,15])
      console.timeEnd()
    }
  }
</script>
<style lang="scss" scoped>
    .p-index {
    }
</style>
