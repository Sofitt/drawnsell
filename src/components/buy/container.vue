<template>
  <div class="container">
    <div class="wrapper">
      <carousel />
      <div class="basket" />
      <carousel />
    </div>
  </div>
</template>

<script>
import carousel from '@/components/buy/carousel'

export default {
  name: 'container',
  components: {
    carousel
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
  .wrapper {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    padding: 25px 0;
  }
  .basket {
    width: 500px;
    aspect-ratio: 3/2;
    background-color: red;
  }
</style>
