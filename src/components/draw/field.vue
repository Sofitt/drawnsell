<template>
  <canvas
    id="draw-field"
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
  emits: ['interface'],
  props: {
    fullscreen: {
      type: Boolean
    }
  },
  components: {
  },
  inject: ['lineCfg'],
  data () {
    return {
      // canvas
      canvas: null,
      context: null,
      // offscreenCanvas
      offScreenCanvas: null,
      subContext: null,
      // Draw settings
      pos: { x: 0, y: 0 },
      line: {
        cap: 'round',
        width: 5,
        color: 'red',
        mode: ''
      }
    }
  },
  watch: {
    lineCfg: {
      handler (cfg) {
        Object.assign(this.line, cfg.value)
      },
      deep: true
    },
    fullscreen (is) {
      !is && this.rerenderImg()
    }
  },
  mounted () {
    this.emitInterface()
    window.addEventListener('resize', this.rerenderImg)
    this.canvas = this.$el
    this.context = this.canvas.getContext('2d')
    this.createOffsetScreenCanvas()
    this.rerenderImg()
  },
  methods: {
    createOffsetScreenCanvas () {
      this.offScreenCanvas = document.createElement('canvas')
      this.offScreenCanvas.width = 3000
      this.offScreenCanvas.height = 3000
      this.subContext = this.offScreenCanvas.getContext('2d')
    },
    setPosition(e) {
      this.pos.x = e.offsetX >= 0 ? e.offsetX : 0
      this.pos.y = e.offsetY >= 0 ? e.offsetY : 0
    },
    setLineStyle () {
      this.subContext.lineWidth = this.line.width
      this.subContext.lineCap = this.line.cap
      this.subContext.strokeStyle = this.line.color
    },
    setLinePath (evt) {
      this.subContext.globalCompositeOperation='source-over'
      if (this.line.mode === 'erase') {
        this.subContext.globalCompositeOperation='destination-out'
        this.subContext.arc(this.pos.x,this.pos.y,8,0,Math.PI*2,false)
        this.subContext.fill()
        this.setPosition(evt)
      } else if (this.line.mode === 'rays') {
        this.subContext.moveTo(this.pos.x, this.pos.y)
        this.subContext.lineTo(evt.offsetX, evt.clientY)
      } else { // if (this.line.mode === 'pen')
        this.subContext.moveTo(this.pos.x, this.pos.y)
        this.setPosition(evt)
        this.subContext.lineTo(this.pos.x, this.pos.y)
      }
    },
    draw(evt) {
      if (evt.buttons !== 1) return
      this.subContext.beginPath()
      this.setLineStyle()
      this.setLinePath(evt)
      this.subContext.stroke()
      this.rerenderImg()
    },
    setCanvasSize () {
      const { clientWidth: width, clientHeight: height } = document.querySelector('#draw-field').parentNode
      this.context.canvas.width = width - 5
      this.context.canvas.height = this.fullscreen ? height - 15 : height / 2
    },
    putImgData () {
      this.context.drawImage(this.offScreenCanvas, 0, 0)
    },
    rerenderImg () {
      this.setCanvasSize()
      this.putImgData()
    },
    downloadImg () {
      let a = document.createElement('a')
      a.href = this.canvas.toDataURL('image/png', 1.0)
      a.download = 'aboba'
      document.body.appendChild(a)
      a.click()
    },
    emitInterface () {
      this.$emit('interface', {
        downloadImg: () => this.downloadImg()
      })
    }
  }
}
</script>

<style scoped lang="scss">
canvas {
  border: 1px solid #ccc;
}
</style>
