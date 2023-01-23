<template>
  <div class="draw-page">
    <div class="container-wrapper">
      <intro />
      <container />
      <statistics />
    </div>
  </div>
</template>

<script>
import intro from '@/components/draw/intro'
import container from '@/components/draw/container'
import statistics from '@/components/draw/statistics'

export default {
  name: 'draw-page',
  components: {
    intro,
    container,
    statistics
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
  .draw-page {
    padding-top: 40px;
    height: 100%;
  }
</style>
