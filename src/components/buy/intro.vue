<template>
  <div class="intro container">
    <h2>BUY</h2>
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
  & h2 {
    margin-bottom: 160px;
    font-family: 'Lexend Exa';
    font-style: normal;
    font-weight: 900;
    font-size: 74px;
    line-height: 92px;
    color: #FFFFFF;
  }
  & img {
    max-width: 754px;
    width: 100%;
    object-fit: contain;
  }
}
</style>
