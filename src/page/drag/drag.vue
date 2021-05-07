<template>
  <div class="p-drag">

    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable class="list-group" :list="list1" group="people">
        <div
            class="list-group-item"
            v-for="(element, index) in list1"
            :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable class="list-group" :list="list2" group="people">
        <div
            class="list-group-item"
            v-for="(element, index) in list2"
            :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

    <div v-for="(father,index) in fartherList">
      {{father.name}}
      <draggable class="list-group" :list="father.list" group="father" @change="log">
        <div
            class="list-group-item"
            v-for="(element, index) in father.list"
            :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

  </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  name: '',
  components: {draggable},
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ],
      fartherList: []
    }
  },
  created() {
  },
  mounted() {
    this.fartherList = [/*
      {
        name: 'father_1',
        list: [
          { name: "John", id: 1 },
          { name: "Joao", id: 2 },
          { name: "Jean", id: 3 },
          { name: "Gerard", id: 4 }
        ]
      },
      {
        name: 'father_2',
        list: [
          { name: "Juan", id: 5 },
          { name: "Edgard", id: 6 },
          { name: "Johnson", id: 7 }
        ]
      },
      {
        name: 'father_3',
        list: [
          { name: "8", id: 8 },
          { name: "9", id: 9 },
          { name: "10", id: 10 }
        ]
      },
    */]
    this.fartherList = [{name: 'father_1'},{ name: 'father_2'},{ name: 'fahter_3'}]
    let id = 0
    let tempArr = JSON.parse(JSON.stringify(this.fartherList))
    tempArr.forEach(i=>{
      i.list = [
        {name: i.name+id, id: id++},
        {name: i.name+id, id: id++},
      ]
    })
    this.fartherList = JSON.parse(JSON.stringify(tempArr))
  },
  methods: {
    log() {
      console.log(92, this.fartherList)
    }
  }
}
</script>
<style lang="scss" scoped>
.p-drag {
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  >div{
    border: solid 1px red;
    width: 200px;
  }
}
</style>
