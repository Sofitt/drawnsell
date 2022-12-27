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
        <li
          v-for="menuItem of tool.menu"
          :key="menuItem"
          @click="handleClick(menuItem)"
        >
          <span>{{ menuItem.name }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import toolsActions from '@/components/draw/components/toolsActions'

export default {
  name: 'tools',
  emits: ['handle-tools'],
  components: {},
  data () {
    return {
      tools: toolsActions
    }
  },
  computed: {},
  watch: {},
  mounted () {

  },
  methods: {
    handleClick (args) {
      const {func, type, arg} = args
      if (type === 'emit') {
        this.$emit('handle-tools', func.bind(null, arg))
      } else {
        func(arg)
      }
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
    & span {
      text-align: left;
    }
  }
}
</style>
