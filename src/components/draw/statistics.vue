<template>
  <div class="statistics container">
    <div class="container-wrapper">
      <div
        v-for="i of 3"
        :key="i"
        class="card"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'statistics',
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
.statistics {
  max-width: 1340px;
  & .container-wrapper {
    padding: 80px 0 85px;
    display: flex;
    flex-flow: row wrap;
    gap: 40px;
  }
}
.card {
  min-width: 340px;
  flex-basis: calc(100% / 3 - 27px);
  height: 545px;
  background-color: var(--green-1);
  @media (max-width: 800px) {
    flex-basis: 100%;
    height: 345px;
  }
}
</style>
