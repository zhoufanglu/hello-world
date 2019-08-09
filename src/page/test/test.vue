<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="test">
        <header-content></header-content>
        <div>test</div>
        <div class="father">
            <div class="child">1</div>
            <div class="child">2</div>
            <div class="child">3</div>
        </div>
        <!--<facebook-loader></facebook-loader>-->
        <div>
            <content-loader
                    :height="300"
                    :width="280"
                    :speed="2"
                    primaryColor="#f3f3f3"
                    secondaryColor="#fdfbdb"
            >
                <rect x="106" y="20" rx="4" ry="4" width="50" height="6" />
                <rect x="40" y="40" rx="3" ry="3" width="200" height="6" />
                <rect x="40" y="60" rx="3" ry="3" width="200" height="6" />
                <rect x="40" y="80" rx="3" ry="3" width="200" height="6" />
                <rect x="106" y="100" rx="4" ry="4" width="50" height="6" />
            </content-loader>
        </div>

        <router-link to="/home">goHome</router-link>
        <testComponents>
          <template v-slot:footer="slotProps">
              <div>父组件的元素</div>
              <h1>{{slotProps.val}}</h1>
          </template>
        </testComponents>

        <div id="root">
            <input type="text" v-model="firstName"><br>
            <input type="text" v-model="lastName">
            <p>{{fullName}}</p>
            <p>{{count}}</p>
        </div>
        <button @click="netWorkTest()">点击后假装断网</button>
        <button @click="goRefresh()">goRefresh【断网了就会自动去这个页面】</button>
        <hr>
        <div>
            <h4>action</h4>
            <div></div>
            <button @click="add">add</button>
        </div>
            <el-button>默认按钮</el-button>
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>

        <div class="test-89">
            <div>1</div>
            <div>2</div>
        </div>

        <table>
            <thead>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
            </thead>
            <tbody>
                <tr>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
            </tbody>
        </table>
        <div style="width: 100%;height: 200px;border: solid 1px red" class="flex-test">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </div>
    </div>
</template>
<script>
  import testComponents from '@c/testComponents.vue'
  import {mapState,mapActions } from 'vuex'
  import headerContent from '@c/header.vue'
  import {FacebookLoader,ContentLoader } from 'vue-content-loader'
  //mixins 定义个对象（优先级全局mixins>局部mixins>局部mixins，全局定义mixins不要+s）
  const countConsole ={
    created(){
      //console.log(26,this);
      this.change()
      //this.apiTest()
    },
    methods:{
      change(){
        //console.log('我是mixins');
      },
      apiTest(){
        //console.log(35,this.$api)
        this.$api.store.getStoreList({code:'utf-8',q:'手机'}).then(res=>{
          //console.log(36,res)
        })
      },
      netWorkTest(){
        //this.$store.commit('changeNetwork',false)
        this.changeNetwork(false)
      },
      goRefresh(){
        this.$router.push({path:'refresh'})
      },
      ...mapActions(['changeNetwork'])
    }
  }
  export default {
    name: '',
    mixins:[countConsole],
    data(){
      return{
        radio:'',
        firstName:'',
        lastName:'',
        count:0 ,
      }
    },
    methods: {
      go() {
        this.$router.push({
          path: '/home'
        })
      },
      add(){
        this.increment()
      },
      load(){
        //console.log(84,this.$api.store.getMockServerTest())
        this.$api.store.getMockServerTest().then(res=>{
          //console.log(85,res.data)
        })
      },
      quest_1(){
        /*这是一道大题目，把考点拆成了4个小项；需要侯选人用递归算法实现（限制15行代码以内实现；限制时间10分钟内完成）：
        a) 生成一个长度为5的空数组arr。
        b) 生成一个（2－32）之间的随机整数rand。
        c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
          d) 最终输出一个长度为5，且内容不重复的数组arr。*/
        let arr = new Array(5)
        //const rand = Math.floor(Math.random()*31+2)
        const getRand =()=>{
          return Math.floor(Math.random()*31+2)
        }
        let index = 0
        const setArray =()=>{
          const rand = getRand()
          if(arr.indexOf(rand) === -1){
            arr[index] = rand
            index++
          }else{
            setArray()
          }
          if(index !== 5){
            setArray()
          }
        }
        setArray()
        console.log(101,arr)
      },
      quest_2(){
        //写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格
        let string = ' asds  dsdds '
        let arr = string.split(' ')
        let newStr = ''
        arr.map((item,index)=>{
          newStr += item 
        })
        console.log(124,newStr)
      },
      quest_3(){
        //去除字符串中最后一个指定的字符
        let string = '12323sdaas2'
        let delOne = '1'
        delLastItem(string,'2')
        /**
         *
         * @param string '字符串'
         * @param delItem '删除的字符'
         */
        function delLastItem(string,delItem){
          let arr = string.split('')
          arr.map((item,index)=>{
            if(delItem === item){
              arr.splice(index,1)
            }
          })
          console.log(136,arr.join(''))
        }
      },
      quest_4(){
        //写一个方法把下划线命名转成大驼峰命名 project_name->projectName
        let str = 'project_name_a_a'
        let arr = str.split('_')
        let newStr = ''
        arr.map((item,index)=>{
          if(index !== 0){
            newStr += toUpperCaseFirst(item)
          }else{
            newStr += item
          }
        })
        console.log(newStr)
        //name->Name
        function toUpperCaseFirst(str) {
          let arr = str.split('')
          let list = ''
          arr.map((item,index)=>{
            if(index === 0){
              list += item.toUpperCase()
            }else{
              list += item
            }
          })
          return list
        }

      },
      quest_5(){
        //求整数的7倍 不用+-*/
        num_7(5)
        function num_7(x){
          let arr = new Array(x)
          let newArr = [...arr,...arr,...arr,...arr,...arr,...arr,...arr]
          console.log(185,newArr.length)

        }
      },
      quest_6(){
        //写个方法随机打乱一个数组
        /**
         * 思路，打乱数组，就是打乱索引index
         * 生成 0~arr.length之期间随机数，且不能重复，来作为索引
         * 最后按照索引输出数组就Ok
         */
        let arr = [1,2,3,4,5]
        //let index = Math.floor(Math.random()*(arr.length-1)+0)
        let indexList = []
        let n = 0
        while (n < arr.length) {
          let randomNum = Math.floor(Math.random() * (arr.length - 1) + 0)
          if(indexList.indexOf(randomNum) === -1){
            indexList.push(randomNum)
          }
          n++
        }
        console.log(208,indexList)
      },
      quest_7(){
        var name = 'Tom';
        (function() {
          if (typeof name == 'undefined') {
            var name = 'Jack';
            console.log('Goodbye ' + name);
          } else {
            console.log('Hello ' + name);
          }
        })();
      },
      quest_8(){
        //找出字符串中连续出现最多的字符和个数
        /*'abcaakjbb' => {'a':2,'b':2}
        'abbkejsbcccwqaa' => {'c':3}*/
        findMaxCount('abbkejsbcccwqaa')
        //层主比较low，用顺序比较法。。
        function findMaxCount(string){
          let arr = string.split('')
          let objArr = [],max = 0
          //1、第一个字符串和后面的字符串比较，相同+1,不同就break
          for(let i=0;i<arr.length-1;i++){
            let count = 0
            for(let j=i+1;j<arr.length;j++){
              if(arr[i] === arr[j]){
                count++
              }else{
                break
              }
            }
            //记住最大的数
            if(max<=count){
              max = count
            }
            //把每个字母比较出现的次数 放入新数组
            objArr.push({
              name: arr[i],
              count: count+1
            })
          }
          let returnArr = []
          //通过max找出objArr中的字母，然后放入新数组
          objArr.map((item)=>{
            if(item.count === max+1){
              returnArr.push(item)
            }
          })
          console.log(returnArr)
          return returnArr
        }
      },
      quest_9(){/*
        function sleep(time) {
          return new Promise((resolve, reject) => {
            setTimeout(()=>{
              resolve()
            },time)
          })
        }
        
        async function loopLight(){
          await sleep(2000).then(()=>{
            console.log('xx')
          })
        }
        loopLight()*/
        var a = {n: 1};
        var b = a; // b = {n:1}
        /*a.x = a
        a = {n:2}*/
        //a.x = a = {n: 2}; //{n:2,}
        console.log(a.x,b.x)


      },
      quest_10(){
        console.log('-------------------')
        let person = {
          name: 'lfz',
          age: 23
        }
        let obj = new Proxy(person,{
          get (target, key ){
            if(key in target){
              return target[key]
            }else{
              console.log('没有此属性')
            }
          },
          /*set (target,key,value) {
            target[key] = value
            console.log(356,value)
          }*/
        })
        obj.age = -1
        obj.age = 22
        console.log(365,obj.age)
        console.log(354,obj.name)

      },
      ...mapActions(['increment','changeTest']),
    },
    mounted(){
      //this.load()
      //算法
      //this.quest_1()
      //this.quest_2()
      //this.quest_3()
      //this.quest_4()
      //this.quest_5()
      //this.quest_6()
      //this.quest_7()
      //this.quest_8()
      //this.quest_9()
      this.quest_10()
    },
    computed:{
      fullName(){
        return this.firstName+ ' '+this.lastName
      },
      ...mapState(['network'])
    },
    watch:{
      fullName(newVal,oldVal){
        this.count++
      }
    },
    components:{
      testComponents,
      headerContent,
      FacebookLoader,
      ContentLoader
    }
  }
</script>
<style lang="scss">
    .test{
        .test-89{
            display: flex;
            flex-direction: column;
            height: 500px;
            border: solid 1px greenyellow;
            >div:first-child{
                height: 300px;
                border: solid 1px red;
            }
            >div:last-child{
                height: 100%;
                border: solid 1px blue;

            }
        }
        .flex-test{
            display: flex;
            >div{
                border: solid 1px blue;
                flex: 1;
            }
        }
        .father{
            border: solid 1px red;
            >div+div{
                border-top: solid 1px blue;
            }
        }
    }
</style>
