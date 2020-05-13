<template>
    <div class="p-test3">
        <h2>test3</h2>
        <h3>我的年龄{{age}}</h3>
        <div class="test-div">
            {{testVal}}
            <div class="text-justify">名字<i></i></div>
        </div>
    </div>
</template>
<script>
    import {mapState, mapMutations} from 'vuex';
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
        computed: {
            ...mapState({
                moduleVal: state => {
                    console.log(29, state)
                    return state.a.moduleVal
                },
                age: state => state.a.age,
            })
        },
        methods:{
            go() {
                //this.$router.push({path:'/test_2'})
            },
            setTest_3Val(val){
                this.childVal = val
            },
            ...mapMutations(['setAge'])
        },
        created() {
            this.setAge('100')
            console.log(40, this.$store)
            console.log(43, this.moduleVal)
            console.log(44, this.age)
        },
        mounted() {
            const arr = [1,2,3,4]
            const res = arr.every((i,index)=>{
                console.log(i)
                return false
            })
            console.log(40, res) //false

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
    .text-div{
        display: flex;
    }
    .text-justify{
        display: inline-block;
        width: 60px;
        text-align: justify;
        border: solid 1px red;
        &:after {
            content: " ";
            display: inline-block;
            width: 100%;
        }
    }
</style>