<template>
  <div class="app">
    <black-sun />
    <v-header />
    <router-view />
    <v-footer />
    <hamster-modal />
  </div>
</template>

<script>
import blackSun from '@/components/UI/black-sun'
import vHeader from './components/main/v-header'
import vFooter from './components/main/v-footer'
import hamsterModal from '@/components/modals/hamster-modal'

export default {
  components: {blackSun, vHeader, vFooter, hamsterModal},
  mounted() {
    window.scroll(0, 0)
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  scroll-behavior: smooth;
  color: #2c3e50;
}
</style>
