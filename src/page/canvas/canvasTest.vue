<template>
  <div class="p-canvas-test">
    <img src="../../assets/img/canvasTest.png" width="100" height="100">
    <canvas ref="cv"
      @mousedown="onmousedown"
      @onmouseup="onmouseup"
    >
    </canvas>
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
