<template>
    <div>
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

    </div>
</template>

<script>
    export default {
        name: "test_3",
        data() {
            return {
                testVal:'我是data里面的数据'
            }
        },
        methods:{
            go() {
                this.$router.push({path:'/test_2'})
            }
        },
        beforeCreate() {
            console.log('beforeCreate', this)
        },
        created() {
            console.log('我是created')
            console.log(this.testVal)
        },
        mounted() {
            JSON.parse(JSON.stringify(obj))
            console.log('我是mounted')
            console.log(this.testVal)
        }
    }
</script>

<style scoped lang="scss">
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
</style>