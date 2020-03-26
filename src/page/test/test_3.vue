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

        <div style="margin-top: 30px; border: solid 1px green">
            <com_b
                    :test3Val_1="test3Val_1"
                    :test3Val_2="test3Val_2"
            ></com_b>
        </div>

    </div>
</template>

<script>
    import com_b from "@c/com_b.vue";
    //import testComponents from "@c/testComponents.vue";
    export default {
        name: "test_3",
        components:{com_b},
        data() {
            return {
                testVal:'我是data里面的数据',
                test3Val_1: '1111',
                test3Val_2: '2222',
            }
        },
        methods:{
            go() {
                this.$router.push({path:'/test_2'})
            }
        },
        created() {

        },
        mounted() {
           
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