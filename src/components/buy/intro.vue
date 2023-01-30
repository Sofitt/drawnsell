<template>
  <div class="intro container">
    <h1>BUY</h1>
    <img
      :src="require('@/assets/buy/intro.webp')"
      alt=""
    >
  </div>
</template>

<script>

export default {
  name: 'intro',
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {

  },
  methods: {}
}
</script>

<style scoped lang="scss">
.intro {
  padding-top: 90px;
  margin-bottom: 102px;
  display: flex;
  flex-flow: column;
  align-items: center;
  & h1 {
    margin-bottom: 160px;
    color: #FFFFFF;
  }
  & img {
    max-width: 754px;
    width: 100%;
    object-fit: contain;
  }
}
</style>
