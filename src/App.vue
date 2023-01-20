<template>
  <div class="app">
    <hamster-modal />
    <router-view />
    <v-footer />
  </div>
</template>

<script>
import vFooter from './components/main/v-footer'
import hamsterModal from '@/components/UI/hamster-modal'

export default {
  components: {vFooter, hamsterModal}
}
</script>

<style lang="scss">
#app {
  scroll-behavior: smooth;
  color: #2c3e50;
}
</style>
