<template>
    <div class="p-test3">
        <h2>test3</h2>
        <div class="test-div">
            {{testVal}}
        </div>
    </div>
</template>
<script>
    //版本问题 这版本不用aos
    export default {
        name: "test_3",
        data() {
            return {
                testVal:'我是data里面的数据',
                test3Val_1: '1111',
                test3Val_2: '2222',
                fnComVal: '函数式组件的值',
                childVal: '',
                data_1: '',
                data_2: ''
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
            //console.log('-----------------')
            let val_1 = 1
            let val_2 = 2;
            [this.data_1, this.data_2] = [val_1, val_2]
        },
        mounted() {
            this.testVal = 'xxxxx'
            const dom = document.querySelector('.test-div')
            console.log(40, dom.offsetHeight)

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