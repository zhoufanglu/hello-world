<template>
  <div class="p-test3">
    <button @click="operateClick">操作</button>
    <div v-for="(item, index) in list" :key="item.id" >
      key:{{item.id}}
      --------
      {{item.name}}
    </div>
    <button @click="throtClick">节流按钮</button>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
import _ from 'lodash'
export default {
  name: "test_3",
  data() {
    return {
      list: []
    }
  },
  computed: {

  },
  methods: {
    operateClick(){
/*      this.list.push({
        id: 4,
        name: 'test4',
      })*/
      let index = 1, item = {id:4, name: 'testInsert'}
      this.list.splice(index, 0, item);
    },

    throtClick: _.throttle(function (){
      console.log(36, this)
      console.log('aaa')
    }, 2000)
  },
  created() {
    const list = [
      {
        id: 1,
        name: 'test1',
      },
      {
        id: 2,
        name: 'test2',
      },
      {
        id: 3,
        name: 'test3',
      },
    ]
    this.list = [...list]
    console.log(37, this.list)
  },
  mounted() {

  },
}
</script>

<style scoped lang="scss">
//@import "../../assets/js/aos/aos.css";
.p-test3{
  color: $theme;
}
</style>
