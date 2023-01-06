<template>
  <div class="container">
    <tools
      @handle-tools="handleTools"
      @change-pen-color="changePenColor"
      @change-pen-size="changePenSize"
      @change-pen-mode="changePenMode"
      @download-img="downloadImg"
      @fullscreen="fullscreen"
    />
    <field
      :fullscreen="isFullscreen"
      @interface="getChildInterface"
    />
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import tools from '@/components/draw/components/tools'
import field from '@/components/draw/field'

export default {
  name: 'container',
  components: {tools, field},
  setup () {
    let lineCfg = ref({})
    let isFullscreen = ref(false)
    const changePenMode = (actionData) => {
      console.debug('c', actionData)
      lineCfg.value.mode = actionData.isOn && actionData.mode
    }
    const changePenColor = (actionData) => {
      console.debug('c', actionData.color)
      lineCfg.value.color = actionData.color
    }
    const changePenSize = (actionData) => {
      console.debug('s', actionData)
      lineCfg.value.width = actionData
    }
    const handleTools = (func) => {
      console.debug('handle-tools')
      func()
    }
    provide('lineCfg', lineCfg)

    return {
      lineCfg,
      isFullscreen,
      changePenMode,
      changePenColor,
      changePenSize,
      handleTools
    }
  },
  mounted () {
    document.addEventListener('fullscreenchange', this.handleFullscreenChange)
  },
  beforeUnmount () {
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange)
  },
  methods: {
    getChildInterface (childInterface) {
      this.$options.childInterface = childInterface
    },
    downloadImg () {
      this.$options.childInterface.downloadImg()
    },
    fullscreen () {
      this.isFullscreen ? document.exitFullscreen() : this.$el.requestFullscreen()
    },
    handleFullscreenChange () {
      this.isFullscreen = !!document.fullscreenElement
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  height: 100vh;
  & .tools {
    position: absolute;
    top: 30px;
    right: 3px;
  }
}
</style>
