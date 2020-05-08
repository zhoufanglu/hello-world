<template>
    <div class="p-table">
            table
        <div v-for="i in tableData" :key="i">
            {{i}}
        </div>
    </div>
</template>
<script>
    import eventBus from "../eventBus";
    export default {
        name: '',
        components: {},
        data() {
            return {
                tableData: []
            }
        },
        created() {
            eventBus.$on('setTableData', res=>[
                this.tableData = res
            ])
        },
        mounted() {
        },
        methods: {}
    }
</script>
<style lang="scss" scoped>
    .p-table {
    }
</style>
