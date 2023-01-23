<template>
  <div class="intro container">
    <h2>DRAW</h2>
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
  margin-bottom: 70px;
  display: flex;
  flex-flow: column;
  align-items: center;
  & h2 {
    font-family: 'Lexend Exa';
    font-style: normal;
    font-weight: 900;
    font-size: 74px;
    line-height: 92px;
    color: #FFFFFF;
  }
}
</style>
