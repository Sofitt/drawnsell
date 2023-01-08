<template>
  <div class="buy-card">
    <img
      :src="cardData.img"
      alt=""
    >
    <article class="info">
      <h4>{{ cardData.name }}</h4>
      <p>{{ cardData.cost }}</p>
    </article>
  </div>
</template>

<script>

export default {
  name: 'buy-card',
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  components: {},
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
.buy-card {
  position: relative;
  display: flex;
  flex-flow: column;
  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.info {
  position: absolute;
  top: 100%;
  background-color: white;
  display: flex;
  flex-flow: column;
  gap: 15px;
  padding: 20px 15px 35px;
}
</style>
