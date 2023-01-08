<template>
  <div class="carousel">
    <swiper
      ref="swiper"
      :slides-per-view="3"
      :space-between="15"
      :direction="'vertical'"
      :modules="modules"
      :navigation="true"
    >
      <swiper-slide
        v-for="i in 5"
        :key="i"
      >
        <img :src="require(`@/assets/buy-carousel/bg1.png`)">
      </swiper-slide>
    </swiper>
    <template v-if="swiper">
      <button
        type="button"
        class="nav-btn __prev"
        :disabled="swiper.isBeginning"
        @click="swipe(false)"
      />
      <button
        type="button"
        class="nav-btn __next"
        :disabled="swiper.isEnd"
        @click="swipe(true)"
      />
    </template>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar } from 'swiper'
import 'swiper/css'

export default {
  name: 'carousel',
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Scrollbar]
    }
  },
  data () {
    return {
      swiper: null
    }
  },
  computed: {},
  watch: {},
  mounted () {
    this.swiper = this.$el.querySelector('.swiper').swiper
  },
  methods: {
    swipe (isNext) {
      isNext ? this.swiper.slideNext() : this.swiper.slidePrev()
    }
  }
}
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  & .nav-btn {
    z-index: 2;
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #fff;
    left: 50%;
    border-radius: 100%;
    &:disabled {
      opacity: 0.5;
    }
    &.__prev {
      top: 0;
      transform: translate(-50%, -50%);
    }
    &.__next {
      bottom: 0;
      transform: translate(-50%, 50%);
    }
  }
}
.swiper {
  width: 100%;
  height: 100%;
  max-height: 750px;
  max-width: 185px;
}
.swiper-slide {
  max-height: 240px;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
