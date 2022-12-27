<template>
  <div class="draw">
    <drawField />
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

<style lang="scss">
  .draw {
    height: 100%;
  }
</style>
