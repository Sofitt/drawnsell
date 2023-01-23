<template>
  <div class="buy-page">
    <div class="container-wrapper">
      <intro />
      <container />
    </div>
  </div>
</template>

<script>
import intro from '@/components/buy/intro'
import container from '@/components/buy/container'

export default {
  name: 'buy-page',
  components: {
    intro,
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
.buy-page {
  padding-top: 40px;
  padding-bottom: 500px;
}
</style>
