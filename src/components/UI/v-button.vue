<template>
  <button
    class="v-button"
    :class="{transparent, rounded}"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>

export default {
  name: 'v-button',
  emits: ['click'],
  props: {
    transparent: {
      type: Boolean
    },
    rounded: {
      type: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
.v-button {
  cursor: pointer;
  padding: 4px 30px;
  font-family: 'Kurale';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: black;
  &.transparent {
    color: white;
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    background-color: transparent;
    border: 2px solid #FFFFFF;
    padding: 12px 24px;
  }
  &.rounded {
    border-radius: 50px;
  }
}
</style>
