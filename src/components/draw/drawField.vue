<template>
  <div class="draw-field">
    <canvas
      id="myCanvas"
      ref="field"
      @mousedown="setPosition"
      @mouseenter="setPosition"
      @mousemove="draw"
    >
      Браузер не поддерживает рисовалку
    </canvas>
  </div>
</template>

<script>

export default {
  name: 'draw-field',
  components: {},
  data () {
    return {
      canvas: null,
      context: null,
      pos: { x: 0, y: 0 },
      line: {
        cap: 'round',
        width: 5,
        color: 'red'
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
    this.canvas = this.$refs.field
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
      this.context.moveTo(this.pos.x, this.pos.y)
      this.setPosition(evt)
      this.context.lineTo(this.pos.x, this.pos.y)
    },
    draw(evt) {
      if (evt.buttons !== 1) return
      this.context.beginPath()
      this.setLineStyle()
      this.setLinePath(evt)
      this.context.stroke()
    },
    onResize () {
      const { innerWidth: width, innerHeight: height } = window
      this.context.canvas.width = width / 2
      this.context.canvas.height = height / 2
    }
  }
}
</script>

<style lang="scss">
.draw-field {
  position: relative;
  height: 100%;
  & canvas {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #ccc;
  }
}
</style>
