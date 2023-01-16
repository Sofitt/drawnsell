<template>
  <section class="carousel">
    <h3 hidden>
      Карусель товаров
    </h3>
    <swiper
      ref="swiper"
      :slides-per-view="3"
      :space-between="15"
      :direction="'vertical'"
      :modules="modules"
      :navigation="true"
      :allow-touch-move="false"
    >
      <swiper-slide
        v-for="card in content"
        :key="card.img"
      >
        <buyCard
          :class="{__disabled: card.isLast}"
          draggable="true"
          :card-data="card"
          @dragstart="dragStart($event, card)"
        />
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
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar } from 'swiper'
import buyCard from '@/components/buy/components/buy-card'
import 'swiper/css'

export default {
  name: 'carousel',
  emits: ['drag-item'],
  props: {
    content: {
      type: Array,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    buyCard
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
    dragStart (e, data) {
      this.$emit('drag-item', {e, data})
    },
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
