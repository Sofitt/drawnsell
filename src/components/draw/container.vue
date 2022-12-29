<template>
  <div class="container">
    <tools
      @handle-tools="handleTools"
      @change-pen-color="changePenColor"
      @change-pen-size="changePenSize"
      @change-pen-mode="changePenMode"
    />
    <field />
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
      changePenMode,
      changePenColor,
      changePenSize,
      handleTools
    }
  },
  mounted () {
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
    right: 0;
  }
}
</style>
