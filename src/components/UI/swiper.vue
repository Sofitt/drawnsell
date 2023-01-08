<template>
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        Slide 1
      </div>
      <div class="swiper-slide">
        Slide 2
      </div>
      <div class="swiper-slide">
        Slide 3
      </div>
      ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination" />

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev" />
    <div class="swiper-button-next" />

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar" />
  </div>
</template>

<script>
// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css/bundle'


export default {
  name: 'swiper',
  components: {},
  setup () {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination'
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    })

    return {
      swiper
    }
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

</style>
