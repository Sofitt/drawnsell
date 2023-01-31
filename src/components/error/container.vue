<template>
  <div class="container">
    <div class="wrapper">
      <h1>404</h1>
      <p>Страница не найдена</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'container'
}
</script>

<style scoped lang="scss">
.container {
  z-index: 2;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: absolute;
  max-width: unset;
  & .wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background: rgba(4, 5, 33, 0.6);
    padding: 20px 20px 34px;
  }
  & h1 {
    color: var(--red)
  }
  & p {
    font-size: 52px;
    color: var(--red)
  }
}
</style>
