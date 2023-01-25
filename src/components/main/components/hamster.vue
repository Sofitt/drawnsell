<template>
  <div
    class="hamster"
    draggable="false"
  >
    <img
      class="img"
      :src="require('@/assets/main/dancing-hamstergif.gif')"
      alt=""
    >
    <span class="board" />
  </div>
</template>

<script>

export default {
  name: 'hamster'
}
</script>

<style scoped lang="scss">
.hamster {
  position: relative;
  user-select: none;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  padding-bottom: 100px;
}
.img {
  pointer-events: none;
  z-index: 2;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  height: 124px;
  width: auto;
  object-fit: contain;
}
.board {
  z-index: 1;
  position: absolute;
  bottom: 101px;
  left: 50%;
  transform: translateX(-50%);
  background-color: gray;
  height: 5px;
  width: 124px;
}
</style>
