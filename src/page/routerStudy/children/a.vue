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
      },
      mergeArr(){
        let list=
        [{
          "id": "201a1fa366874118888614638d6e1e42",
          "email": "195418748@qq.com",
          "accessKey": null,
          "fileId": "fd93a25988fc4bb5bbd17f694c8b6d8e",
          "authorityId": "1",
          "userName": "test"
        }, {
          "id": "201a1fa36687411894a699938d6e1e42",
          "email": "195418748@qq.com",
          "accessKey": null,
          "fileId": "fd93a25988fc4bb5bbd17f694c8b6d8e",
          "authorityId": "2",
          "userName": "test"
        }, /*{
          "id": 1,
          "email": "1@qq.com",
          "accessKey": null,
          "fileId": null,
          "authorityId": null,
          "userName": "zhangsan"
        }, {
          "id": 2,
          "email": "2@qq.com",
          "accessKey": null,
          "fileId": null,
          "authorityId": null,
          "userName": "lisi"
        }, {
          "id": 3,
          "email": "3@qq.com",
          "accessKey": null,
          "fileId": null,
          "authorityId": null,
          "userName": "wangwu"
        }*/]
        console.log(51, list);
        //1、找出id列表
        let labelList = []
        list.forEach(item=>{
          if(labelList.includes(item.email) === false){
            labelList.push(item.email)
          }
        })
        //2、通过labeList 来拼接数据
        let lastArr = []
        labelList.forEach(label=>{
          let obj = {},authorityIdList=[],idList=[]
          list.forEach(item=>{
            if(label === item.email) {
              obj = item
              authorityIdList.push(item.authorityId)
              idList.push(item.id)
            }
          })
          obj.authorityIdList = authorityIdList
          obj.idList = idList
          lastArr.push(obj)
        })
        console.log(80, lastArr)
      }
    },
    components: {},
    mounted() {
      /*console.time()
      this.getData([1, 2 ,3,4,5,6,7,8,9,10,11,12,13,14,15])
      console.timeEnd()*/
      this.mergeArr()
    }
  }
</script>
<style lang="scss" scoped>
    .p-index {
    }
</style>
