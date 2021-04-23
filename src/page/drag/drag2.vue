<template>
  <div class="p-drag2">
    <button @click="add('big')">添加大的</button>
    <button @click="add('small')">添加小的</button>
    <div>
      展示layoutList, x,y,w,h
      <div v-for="(i,index) in layout">
        <span style="font-weight: bolder">
          i:{{i.i}}
        </span>
        <span>{{i.x}},{{i.y}},{{i.w}},{{i.h}}</span>
      </div>
    </div>
    <grid-layout :layout.sync="layout"
                 :col-num="colNum"
                 :row-height="100"
                 :is-draggable="draggable"
                 :is-resizable="resizable"
                 :vertical-compact="true"
                 :use-css-transforms="true"
    >
      <grid-item v-for="item in layout"
                 :static="item.static"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i"
                 class="drag-item"
      >
        <span class="text">{{itemTitle(item)}}</span>
      </grid-item>
    </grid-layout>
  </div>
</template>
<script>
import { GridLayout, GridItem } from "vue-grid-layout"
export default {
  name: '',
  components: {
    GridLayout,
    GridItem
  },
  data() {
    return {
      layout: [],
      draggable: true,
      resizable: true,
      index: 0,
      colNum: 2, //列数，这里就2列
    }
  },
  created() {
    this.loadLayout()
  },
  mounted() {
  },
  methods: {
    loadLayout() {
      /**
       *  GridLayout 部分属性介绍
       *  colNum: 定义栅格系统的列数，其值需为自然数。
       *  rowHeight: 每行的高度，单位像素
       *  margin: 定义栅格中的元素边距。
       * */
      /**
       * GridItem部分属性介绍
       * i - id
       * x - 第几列
       * y - 第几行
       * w - 宽度 为colWidth的倍数
       * h - 高度
       * isResizable - 否可调整大小
       */
      this.layout = [
        {"x":0,"y":0,"w":1,"h":1,"i":"0", static: false},
        {"x":1,"y":0,"w":1,"h":1,"i":"1", static: false},
        {"x":1,"y":1,"w":2,"h":1,"i":"2", static: false},
      ]

      this.index = this.layout.length
    },

    itemTitle(item) {
      let result = item.i;
      if (item.static) {
        result += " - Static";
      }
      return result;
    },

    add(cate) {
      let w = cate === 'big' ? 2 : 1  //大的为2 小的为1
      this.layout.push({
        x: (this.layout.length * 2) % (this.colNum || 2),
        y: this.layout.length + (this.colNum || 2), // puts it at the bottom
        w: this.index%2?2:1,
        h: 1,
        i: this.index,
      })
      // Increment the counter to ensure key is always unique.
      this.index++
      console.log(93, this.layout)

    }
  }
}
</script>
<style lang="scss">
.p-drag2 {
  .vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
  }
  touch-action: none;
  .vue-grid-layout{
    height: 500px;
    border: solid 1px red;
  }
}
</style>
