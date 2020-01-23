<template>
    <div>
        <h2>test_2...</h2>
        <ul>
            <li v-for="(i,index) in list" :key="index">{{ i.name | filtersName }}</li>
            ----
            <li v-for="(i,index2) in list" :key="index2+i.name">{{i.name}}</li>
        </ul>
        <button @click="changeAge">点我改变多层obj数据</button>
        <span>age:{{obj.father.age}}</span>

        <h3>flex shrink</h3>
        <div class="shrink-panel">
            <div class="left">
                1
            </div>
            <div class="right">
                2
            </div>
        </div>
    </div>
</template>

<script>
    import {formatDateTime} from "../../assets/js/utils/validate";
    import axios from 'axios'
    export default {
        name: "test_2",
        data() {
            return {
                list: [
                    {name: 'lfz'},
                    {name: 'sxy'},
                    {name: 'ljd'},
                    {name: 'xjy'},
                ],
                obj:{
                    father:{
                        name:'lfz',
                        age: 16
                    }
                }
            }
        },
        methods: {
            changeAge(){
                this.obj.father.age = 19
            },
            async promiseTest(){
                /**
                 * resolve成功回调，reject失败回调
                 * promise
                 * */
                /*return new Promise((resolve, reject)=>{
                    axios.get(
                        `https://api.agify.io/?name=手机`
                    ).then(res=>{
                        resolve(res)
                    }).catch(err=>{
                        reject(err)
                    })
                })*/
                /**
                 * await
                 */
                return await axios.get(
                    `https://api.agify.io/?name=鸡儿`
                )
            }
        },
        created() {
            let data = {foo: 'foo'}
            let p = new Proxy(data, {
                get(target, key, receiver) {
                    return target[key]
                },
                set(target, key, value, receiver) {
                    console.log('set value', value)
                    target[key] = value // ?
                    return true
                }
            })

            console.log(40, p.foo = 'xx')
            console.log(41, p.foo = 'yy')


        },
        mounted() {
            const promiseObj = this.promiseTest()
            console.log(74, promiseObj)
            promiseObj.then(res=>{
                console.log(76, res)
            }).catch(err=>{
                console.log(err)
            })
        },
        computed: {
            computeVal() {
                return (val) => {
                    console.log('computed')
                    return val.toUpperCase()
                }
            }
        },
        filters: {
            filtersName(name) {
                return name.toUpperCase()
            }
        },
        watch: {
            list() {
                //console.log(48,this)
            }
        }

    }
</script>
<div>sds</div>
<style lang="scss" scoped>
.shrink-panel{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 1px red;
    .left{
        flex-shrink: 1;
        width: 200px;
        border: solid 1px green;
    }
    .right{
        flex-shrink: 2;
        width: 100%;
        border: solid 1px blue;
    }
}
</style>