<template>
  <div class="app">
    <v-header />
    <hamster-modal />
    <router-view />
    <v-footer />
  </div>
</template>

<script>
import vHeader from './components/main/v-header'
import vFooter from './components/main/v-footer'
import hamsterModal from '@/components/UI/hamster-modal'

export default {
  components: {vHeader, vFooter, hamsterModal},
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
