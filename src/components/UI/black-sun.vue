<template>
  <div
    class="black-sun"
  />
</template>

<script>

export default {
  name: 'black-sun'
}
</script>

<style scoped lang="scss">
.black-sun {
  z-index: 0;
  position: absolute;
  top: -76px;
  left: 50%;
  transform: translate(-50%);
  width: 392px;
  height: 392px;
  background: linear-gradient(360deg, rgba(255, 0, 0, 0.25) -11.76%, rgba(238, 40, 101, 0) 66.24%);
  box-shadow: 0px -2px 250px 202px rgba(238, 40, 101, 0.25);
  border-radius: 100% 100%;
}
</style>
