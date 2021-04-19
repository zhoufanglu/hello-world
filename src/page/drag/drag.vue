<template>
  <div class="p-drag">

    <draggable v-model="rowList"
               class="row-panel"
               @start="drag=true"
               @end="drag=false"
    >
      <transition-group
          type="transition"
          name="flip-list"
          class="row-panel"
      >
        <div
            class="row-item"
            v-for="row in rowList"
            :key="row.id">
          <!--second-->
          <draggable v-model="colList"
                     v-if="row.id===0"
                     group="people"
                     @start="drag=true"
                     @end="drag=false"
          >
            <transition-group
                type="transition"
                name="flip-list"
                class="col-panel"
            >
              <div
                  class="color-item"
                  v-for="element in colList"
                  :key="element.id">{{element.name}}
              </div>
            </transition-group>
          </draggable>

          <div v-if="row.id===1">
            row-2
          </div>

        </div>
      </transition-group>
    </draggable>

  </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  name: '',
  components: {draggable},
  data() {
    return {
      rowList: [
        {name: 'row-0', id: 0 , group: "row"},
        {name: 'row-1', id: 1 , group: "row"}
      ],
      colList: [
        { name: "col-0", id: 0 , group: "col"},
        { name: "col-1", id: 1 , group: "col"},
      ],
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.p-drag {

  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }

  .col-panel{
    display: flex;
    .color-item{
      width: 100px;
      height: 100px;
      border: solid 1px red;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .row-panel{
    .row-item{
      height: 200px;
      border: solid 1px red;
    }
  }

}
</style>
