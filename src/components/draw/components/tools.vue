<template>
  <ul class="tools">
    <li
      v-for="menuItem of menu"
      :key="menuItem"
      @click="handleClick(menuItem)"
    >
      <img
        v-if="menuItem.icon"
        :src="require(`@/assets/icons/${menuItem.icon}`)"
        :alt="menuItem.name"
      >
      <span v-else>*</span>
      <span v-if="!menuItem.fill">{{ menuItem.name }}</span>
    </li>
  </ul>
</template>

<script>
import { menu } from '@/components/draw/components/toolsActions'

export default {
  name: 'tools',
  emits: ['handle-tools', 'change-pen-color', 'change-pen-size', 'change-pen-mode', 'download-img'],
  components: {},
  data () {
    return {
      tools: [],
      menu: []
    }
  },
  mounted () {
    this.menu = menu
    this.modeSetter('Карандаш')
  },
  methods: {
    getActionFromMenu (actionName) {
      return this.menu.findIndex(i => i.name === actionName)
    },
    cyclone (action, searchMethod, searchArg, currentStaff) {
      const indexOfCurrentStaff = action.fill[searchMethod](searchArg)
      action[currentStaff] = indexOfCurrentStaff === (action.fill.length - 1)
        ? action.fill[0]
        : action.fill[indexOfCurrentStaff + 1]

      return action[currentStaff]
    },
    downloadImg () {
      this.$emit('download-img')
    },
    modeSetter (actionName) {
      let action = this.menu[this.getActionFromMenu(actionName)]
      const emit = this.cyclone(
        action,
        'indexOf',
        action.isOn,
        'isOn')
      this.$emit('change-pen-mode', { isOn: emit, mode: action.arg })
    },
    changeColor (actionName) {
      let action = this.menu[this.getActionFromMenu(actionName)]
      const emit = this.cyclone(
        action,
        'findIndex',
        c => c.color === action.currentColor.color,
        'currentColor')
      this.$emit('change-pen-color', emit)
    },
    changeSize (actionName) {
      let action = this.menu.find(i => i.name === actionName)
      const emit = this.cyclone(action, 'indexOf', action.currentSize, 'currentSize')
      this.$emit('change-pen-size', emit)
    },
    handleClick (action) {
      this[action.funcName](action.name)
      if (action.funcName === 'modeSetter') {
        this.menu.forEach(item => {
          if (item.name !== action.name && Object.hasOwn(item, 'isOn')) {
            item.isOn = false
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
 .tools {
   pointer-events: none;
   display: flex;
   flex-flow: row wrap;
   width: 100%;
   max-width: 30%;
   gap: 10px;
   & li {
     pointer-events: auto;
     position: relative;
     display: flex;
     flex-flow: column;
     align-items: center;
     justify-content: center;
     height: 30px;
     width: 30px;
     background: white;
     border: 1px solid red;
     & img {
       position: absolute;
       width: 80%;
       object-fit: contain;
     }
     & span {
       text-align: left;
     }
   }
 }
</style>
