<template>
  <section class="draw-field">
    <tools @handle-tools="handleTools" />
    <canvas
      id="myCanvas"
      ref="field"
      @mousedown="setPosition"
      @mouseenter="setPosition"
      @mousemove="draw"
    >
      Браузер не поддерживает рисовалку
    </canvas>
  </section>
</template>

<script>
import tools from '@/components/draw/components/tools'

export default {
  name: 'draw-field',
  components: {
    tools
  },
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
      const { clientWidth: width, clientHeight: height } = this.$el
      this.context.canvas.width = width
      this.context.canvas.height = height / 2
    }
  }
}
</script>

<style scoped lang="scss">
.draw-field {
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  & canvas {
    border: 1px solid #ccc;
  }
  & .tools {
    position: absolute;
    top: 30px;
    right: 0;
  }
}
</style>
