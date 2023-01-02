<template>
  <canvas
    ref="field"
    @mousedown="setPosition"
    @mouseenter="setPosition"
    @mousemove="draw"
  >
    Браузер не поддерживает рисовалку
  </canvas>
</template>

<script>

export default {
  name: 'field',
  components: {
  },
  inject: ['lineCfg'],
  data () {
    return {
      canvas: null,
      context: null,
      pos: { x: 0, y: 0 },
      line: {
        cap: 'round',
        width: 5,
        color: 'red',
        mode: ''
      },
      imgData: null
    }
  },
  watch: {
    lineCfg: {
      handler (cfg) {
        Object.assign(this.line, cfg.value)
      },
      deep: true
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
    this.canvas = this.$el
    this.context = this.canvas.getContext('2d')
    this.onResize()
  },
  methods: {
    setPosition(e) {
      this.pos.x = e.offsetX >= 0 ? e.offsetX : 0
      this.pos.y = e.offsetY >= 0 ? e.offsetY : 0
    },
    setLineStyle () {
      this.context.lineWidth = this.line.width
      this.context.lineCap = this.line.cap
      this.context.strokeStyle = this.line.color
    },
    setLinePath (evt) {
      this.context.globalCompositeOperation='source-over'
      if (this.line.mode === 'erase') {
        this.context.globalCompositeOperation='destination-out'
        this.context.arc(this.pos.x,this.pos.y,8,0,Math.PI*2,false)
        this.context.fill()
        this.setPosition(evt)
      } else if (this.line.mode === 'rays') {
        this.context.moveTo(this.pos.x, this.pos.y)
        this.context.lineTo(evt.offsetX, evt.clientY)
      } else { // if (this.line.mode === 'pen')
        this.context.moveTo(this.pos.x, this.pos.y)
        this.setPosition(evt)
        this.context.lineTo(this.pos.x, this.pos.y)
      }
    },
    draw(evt) {
      if (evt.buttons !== 1) return
      if (this.imgData) {
        this.imgData = false
      }
      this.context.beginPath()
      this.setLineStyle()
      this.setLinePath(evt)
      this.context.stroke()
    },
    saveImgData () {
      console.debug(this.context.canvas.width+5)
      console.debug(this.$el?.parentNode.clientHeight)
      console.debug(this.$el)
      if (!this.imgData || this.$el?.parentNode.clientHeight !== this.context.canvas.width) {
        this.imgData = this.context.getImageData(
          0,
          0,
          this.context.canvas.width,
          this.context.canvas.height
        )
      }
    },
    putImgData () {
      this.imgData && this.context.putImageData(this.imgData, 0, 0)
    },
    onResize () {
      this.saveImgData()
      const { clientWidth: width, clientHeight: height } = this.$el.parentNode
      this.context.canvas.width = width - 5
      this.context.canvas.height = height / 2
      this.putImgData()
      console.debug(this.context)
    }
  }
}
</script>

<style scoped lang="scss">
canvas {
  border: 1px solid #ccc;
}
</style>
