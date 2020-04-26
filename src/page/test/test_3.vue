<template>
    <div class="p-test3">
        <h2>test3</h2>
        <div @click="go">go test_2</div>

        <div class="item-1">
            <div class="left">left</div>
            <div class="right">right</div>
        </div>

        <div class="item-2">
            <div class="left">left</div>
            <div class="right">right</div>
        </div>

        <div style="margin-top: 30px; border: solid 1px green">
            <com_b
                    :test3Val_1="test3Val_1"
                    :test3Val_2="test3Val_2"
            ></com_b>
        </div>

        <!--函数式组件-->
        <input type="text" v-model="fnComVal">
        <fnCom :fnComVal="fnComVal"></fnCom>
      
        <!--hooks-->
        <test_3Child @hook:mounted="setTest_3Val"></test_3Child>
        <!--<test_3Child @setTest_3Val = "setTest_3Val"></test_3Child>-->
        <h2>{{childVal}}</h2>

        <!--aos-->
        <div class="p-aos" data-aos="fade-up"  data-aos-mirror="true"
        >
            aaa
        </div>
        <div class="p-aos" data-aos="fade-right">
            bbb
        </div>
        <div class="p-aos" data-aos="fade-left">
            ccc
        </div>

    </div>
</template>
<script>
    //版本问题 这版本不用aos
    import com_b from "@c/com_b.vue";
    //import AOS from "../../assets/js/aos2/aos.js"
    //import testComponents from "@c/testComponents.vue";

    import fnCom from "../../components/fnCom.vue";
    
    import test_3Child from "../../components/test_3Child.vue";

    export default {
        name: "test_3",
        components:{com_b, fnCom, test_3Child},
        data() {
            return {
                testVal:'我是data里面的数据',
                test3Val_1: '1111',
                test3Val_2: '2222',
                fnComVal: '函数式组件的值',
                childVal: ''
            }
        },
        methods:{
            go() {
                this.$router.push({path:'/test_2'})
            },
            setTest_3Val(val){
                this.childVal = val
            }
        },
        created() {

        },
        mounted() {
            this.$nextTick(()=>{
                console.log(81, AOS)
            })
        }
    }
</script>

<style scoped lang="scss">
    //@import "../../assets/js/aos/aos.css";
    @import "~aos/dist/aos.css";
    .item-1{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        .left{
            width: 100%;
            border: solid 1px red;
        }
        .right{
            width: 150px;
            border: solid 1px green;
        }
    }
    .item-2{
        width: 100%;
        .left{
            float: left;
            width: calc(100% - 150px);
        }
        .right{
            width: 150px;
            float: right;
        }
    }
    .p-test3{
        height: 200vh;
        padding-top: 900px;
        .p-aos{
            background-color: red;
            height: 200px;
            width: 200px;
            margin-top: 20px;
        }
    }
</style>