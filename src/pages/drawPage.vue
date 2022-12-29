<template>
  <div class="draw-page">
    <container />
  </div>
</template>

<script>
import container from '@/components/draw/container'

export default {
  name: 'draw-page',
  components: {
    container
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
    height: 100%;
  }
</style>
