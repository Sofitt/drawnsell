<template>
  <article class="tools">
    <div
      v-for="tool of tools"
      :key="tool.name"
      class="tool"
      :title="tool.name"
      @click.self="handleClick(tool)"
    >
      {{ tool.icon }}
      <ul
        v-if="tool.menu"
        class="dropdown"
      >
        <!--        v-for="menuItem of tool.menu" -->
        <li
          v-for="menuItem of menu"
          :key="menuItem"
          :style="{backgroundColor: menuItem?.fill}"
          :title="menuItem.name"
          @click="handleClick(menuItem)"
        >
          <span v-if="!menuItem.fill">{{ menuItem.name }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import toolsActions from '@/components/draw/components/toolsActions'

export default {
  name: 'tools',
  emits: ['handle-tools', 'change-pen-color', 'change-pen-size', 'change-pen-mode'],
  components: {},
  data () {
    return {
      tools: null,
      menu: [
        {
          name: 'Сменить цвет',
          funcName: 'changeColor',
          currentColor: { color: 'blue', name: 'Синий' },
          fill: [
            { color: 'green', name: 'Зеленый' },
            { color: 'red', name: 'Красный' },
            { color: 'blue', name: 'Синий' }
          ]
        },
        {
          name: 'Сменить размер',
          funcName: 'changeSize',
          currentSize: 5,
          fill: [5, 10, 15]
        },
        {
          name: 'Резинка Вкл/Выкл',
          funcName: 'modeSetter',
          arg: 'erase',
          isOn: false,
          fill: [false, true]
        },
        {
          name: 'Лучи Вкл/Выкл',
          funcName: 'modeSetter',
          arg: 'rays',
          isOn: false,
          fill: [false, true]
        }
      ]
    }
  },
  mounted () {
    console.debug(toolsActions)
    this.tools = [toolsActions.getTools]
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
      // const {func, type, arg} = args
      // if (type === 'emit') {
      //   this.$emit('handle-tools', arg ? func.bind(null, arg) : func)
      // } else {
      //   func(arg)
      // }
    }
  }
}
</script>

<style scoped lang="scss">
 .tools {
   display: flex;
   flex-flow: row wrap;
   width: 100%;
   max-width: 30%;
   pointer-events: none;
 }
 .tool {
   pointer-events: auto;
   cursor: pointer;
   user-select: none;
   position: relative;
   display: flex;
   flex-flow: column;
   align-items: center;
   justify-content: center;
   width: 30px;
   height: 30px;
   background: #e4e4e4;
   border: 1px solid transparent;
   &:hover {
     border: 1px solid gray;
     & .dropdown {
       display: flex;
       flex-flow: column;
     }
   }
 }
.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  width: 30px;
  padding: 10px;
  gap: 10px;
  & li {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 30px;
    border: 1px solid red;
    & span {
      text-align: left;
    }
  }
}
</style>
