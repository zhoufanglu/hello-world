<template>
    <div class="p-bus-father">
        <h1>bus test</h1>
        <button @click="changeTableArr">改变数组</button>
        <tableCom></tableCom>
    </div>
</template>
<script>
    import eventBus from "./eventBus.js";
    import tableCom from "./com/table.vue";
    export default {
        name: '',
        components: {tableCom},
        data() {
            return {
                tableData: [],
                counts: 0
            }
        },
        created() {
        },
        mounted() {
            const data =[{"要素1": "(品名)"}, {"要素2": "(品牌类型)"}, {"要素3": "(出口享惠情况)"}, {"要素4": "(用途[如半导体晶圆或平板显示屏制造用等])"}, {"要素5": "(品牌)"}, {"要素6": "(型号)"}, {"要素7": "(性能[抽气能力])"}, {"要素8": "(GTIN)"}, {"要素9": "(CAS)"}, {"要素10": "(其他[非必报要素，请根据实际情况填报])"}]
            data.some((i)=>{
                for(let key in i){
                    console.log(20, i[key])
                }
            })
        },
        methods: {
            changeTableArr() {
                this.counts++
                console.log(33, this.counts)
                this.tableData.push(this.counts)
                eventBus.$emit('setTableData', this.tableData)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .p-bus-father {
    }
</style>
