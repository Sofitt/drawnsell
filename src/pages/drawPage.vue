<template>
  <div class="draw">
    <div class="container">
      <drawField />
    </div>
  </div>
</template>

<script>
import drawField from '@/components/draw/drawField'

export default {
  name: 'draw-page',
  components: {
    drawField
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  mounted () {

  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .draw {
    height: 100%;
  }
</style>
