<template>
  <div class="p-canvas-test">
    <canvas ref="cv"
      @mousedown="onmousedown"
      @onmouseup="onmouseup"
    >
    </canvas>
<!--    <button @click="freeFile('../../assets/img/canvasTest.png')">readFile</button>-->
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      ctx: {},
      startX: 0,
      startY: 0,
      endX: 0,
      endY:0,
      offsetX: 0,
      offsetY: 0,
    }
  },
  created() {
  },
  mounted() {
    this.loadImg()
  },
  methods: {
    loadImg() {
      //获取ctx
      let ctx = this.$refs.cv.getContext('2d')
      this.ctx = ctx

      //获取图片
      let img = new Image()
      img.src= require('../../assets/img/canvasTest.png')
      img.onload = ()=> {
        this.$refs.cv.width = img.width
        this.$refs.cv.height = img.height
        ctx.drawImage(img, 0,0,img.width,img.height)

        ctx.strokeRect(50, 20, 120, 100);
      }

    },
    onmousedown(e) {
      this.startX = e.offsetX
      this.startY = e.offsetY
      console.log(44,e)
    },
    onmouseup(e) {
      this.endX = e.offsetX
      this.endY = e.offsetY
      let rectList = []
      rectList.unshift(new Rect(this.startX, this.startY, this.endX, this.endY, 'red'))
      // 绘制矩形
      this.ctx.beginPath()
      this.ctx.globalAlpha = 0.3 // 透明度
      this.ctx.moveTo(this.startX, this.startY)
      this.ctx.lineTo(this.endX, this.startY)
      this.ctx.lineTo(this.endX, this.endY)
      this.ctx.lineTo(this.startX, this.endY)
      this.ctx.lineTo(this.startX, this.startY)
      this.ctx.fillStyle = 'yellow'
      this.ctx.strokeStyle = 'black'
      this.ctx.fill()
      this.ctx.stroke()
    },
    /**
     * @description [viewFile 查看文件]
     * @author  chenlong
     * @param {String} url [文件地址]
     * @returns {Null} [没有返回]
     */
    freeFile(url) {
      let onlineViewType = ['doc', 'docx', 'xls', 'xlsx', 'xlsm', 'ppt', 'pptx']
      let fileTypeName = url.substring(url.lastIndexOf('.') + 1, url.length).split('?')[0]
      let isWord = onlineViewType.find((type) => type === fileTypeName)
      if (isWord) {
        url = 'http://view.officeapps.live.com/op/view.aspx?src=' + url
      }
      window.open(url, '_blank')
    }

}
}
</script>
<style lang="scss" scoped>
.p-canvas-test {
  canvas{
    border: solid 1px red;
  }
}
</style>
