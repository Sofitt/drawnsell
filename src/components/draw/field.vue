<template>
  <canvas
    id="myCanvas"
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
      canvasOffset: null,
      context: null,
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
        this.line = Object.assign(this.line, cfg.value)
      },
      deep: true
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
    this.canvas = this.$refs.field
    this.context = this.canvas.getContext('2d')
    this.onResize()
  },
  methods: {
    handleTools (e) {
      console.debug('handle-tools')
      e()
    },
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
      if (this.line.mode === 'erase') {
        this.context.globalCompositeOperation='destination-out'
        this.context.arc(this.pos.x,this.pos.y,8,0,Math.PI*2,false)
        this.context.fill()
        this.setPosition(evt)
      } else if (this.line.mode === 'rays') {
        this.context.globalCompositeOperation='source-over'
        this.context.moveTo(this.pos.x, this.pos.y)
        // this.setPosition(evt)
        this.context.lineTo(evt.clientX-this.canvas.offsetLeft, evt.clientY-this.canvas.offsetTop)
        // this.context.lineTo(this.pos.x, this.pos.y)
      } else {
        this.context.globalCompositeOperation='source-over'
        this.context.moveTo(this.pos.x, this.pos.y)
        this.setPosition(evt)
        // this.context.lineTo(evt.clientX-this.canvas.offsetLeft, evt.clientY-this.canvas.offsetTop)
        this.context.lineTo(this.pos.x, this.pos.y)
      }
    },
    draw(evt) {
      if (evt.buttons !== 1) return
      this.context.beginPath()
      this.setLineStyle()
      this.setLinePath(evt)
      this.context.stroke()
    },
    onResize () {
      const { clientWidth: width, clientHeight: height } = this.$el.parentNode
      this.context.canvas.width = width
      this.context.canvas.height = height / 2
    }
  }
}
</script>

<style scoped lang="scss">
canvas {
  border: 1px solid #ccc;
}
</style>
