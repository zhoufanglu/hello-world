<template>
    <div class="p-index">
        <h3>aaaaaa</h3>
        <div class="masonry">
            <!-- 第一列 -->
            <div class="column">
                <div>第一列</div>
                <div class="item" v-for="(i,index) in col_1" :key="i.value">
                    <img :src="i.img" :alt="i.value">
                </div>
            </div>
            <!-- 第二列 -->
            <div class="column">
                <div>第二列</div>
                <div class="item" v-for="(i,index) in col_2" :key="i.value">
                    <img :src="i.img" :alt="i.value">
                </div>
            </div>
            <!-- 第三列 -->
            <div class="column">
                <div>第三列</div>
                <div class="item" v-for="(i,index) in col_3" :key="i.value">
                    <img :src="i.img" :alt="i.value">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import data from "./data";
  export default {
    name: '',
    data() {
      return {
        col_1:[],
        col_2:[],
        col_3:[],
      }
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
      },
      initMasonryData(){
        let n = 0
        //console.log(124, data[1])
        while (n < data.length) {
          this.col_1.push(data[n++])
          //++n
          if(data[n]){
            this.col_2.push(data[n++])
          }
          //++n
          if(data[n]){
            this.col_3.push(data[n++])
          }
          //++n
        }
        console.log(111,this.col_1)
        console.log(222,this.col_2)
        console.log(333,this.col_3)
      }
    },
    components: {},
    mounted() {
      /*console.time()
      this.getData([1, 2 ,3,4,5,6,7,8,9,10,11,12,13,14,15])
      console.timeEnd()*/
      this.mergeArr()
      //初始化瀑布布局
      this.initMasonryData()
    }
  }
</script>
<style lang="scss" scoped>
    .p-index {
        .masonry {
            display: flex; // 设置为Flex容器
            //flex-direction: ro; // 主轴方向设置为水平方向
        }

        .column {
            display: flex;
            flex-direction: column;
            //flex: 1;
            padding: 0 2px;
            .item {
                margin-bottom: 5px;
                width: 100%;
            }
        }
    }
</style>
