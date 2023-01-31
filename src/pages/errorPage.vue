<template>
  <div class="error-page">
    <container />
  </div>
</template>

<script>
import container from '@/components/error/container'

export default {
  name: 'error-page',
  components: {container},
  beforeMount() {
    this.$store.commit('setErrorPage', true)
  },
  beforeUnmount() {
    this.$store.commit('setErrorPage', false)
  }
}
</script>

<style scoped lang="scss">
</style>
