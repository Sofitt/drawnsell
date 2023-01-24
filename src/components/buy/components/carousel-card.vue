<template>
  <article
    class="carousel-card"
  >
    <img
      :src="`http://localhost:8000/`+cardData.img"
      alt=""
    >
    <div class="info">
      <h4>{{ cardData.name }}</h4>
      <p>{{ cardData.cost }} руб</p>
    </div>
  </article>
</template>

<script>

export default {
  name: 'carousel-card',
  props: {
    cardData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.carousel-card {
  cursor: pointer;
  position: relative;
  display: flex;
  flex-flow: column;
  height: 100%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &:hover {
    & .info {
      transform: translateY(-100%);
      transition: transform .2s ease-in-out;
    }
  }
  &.__disabled {
    pointer-events: none;
    filter: grayscale(1);
  }
}
.info {
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-flow: column;
  gap: 15px;
  padding: 10px 0 25px;
  transform: translateY(0%);
  transition: transform .2s ease-in-out;
}
</style>
