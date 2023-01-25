<template>
  <teleport to="body">
    <section
      v-if="!closed"
      class="hamster-modal"
      @click.self="close"
    >
      <article class="hamster-modal_body">
        <span
          class="hamster-modal_close"
          @click="close"
        >+</span>
        <h4><span class="c-yellow-2">Эй!</span> Кажется внизу танцует <span class="c-red">хомяк</span>!</h4>
        <button
          class="c-yellow-3"
          @click="scrollToFooter"
        >
          Где?!
        </button>
      </article>
    </section>
  </teleport>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'hamster-modal',
  setup () {
    let closed = ref(false)
    const close = () => {
      document.body.style.overflow = 'auto'
      document.body.style.transform = ''
      document.removeEventListener('scroll', cancelScroll)
      closed.value = true
    }
    const cancelScroll = () => {
      document.body.style.overflow = 'hidden'
    }
    const scrollToFooter = () => {
      window.scrollTo({behavior: 'smooth', top: document.documentElement.scrollHeight - document.documentElement.clientHeight, left: 0})
      close()
    }

    return {
      scrollToFooter,
      cancelScroll,
      close,
      closed
    }
  },
  beforeCreate() {
    this.cancelScroll()
  }
}
</script>

<style scoped lang="scss">
.hamster-modal {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  &_body {
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 32px;
    width: 350px;
    height: fit-content;
    padding: 32px 32px 16px;
    background: #33356e;
    border-radius: 30px;
    & h4 {
      color: white;
      font-size: 20px;
    }
    & p {
      width: 100%;
      text-align: center;
    }
  }
  &_close {
    cursor: pointer;
    user-select: none;
    position: absolute;
    top: -8px;
    right: -8px;
    transform: rotate(45deg);
    font-size: 24px;
    line-height: .5;
    color: white;
  }
}
button {
  cursor: pointer;
  padding: 8px 32px;
  width: fit-content;
  background-color: var(--purple-3);
  transition: background-color 0.2s ease-in-out;
  color: white;
  font-size: 16px;
  border-radius: 30px;
  &:hover {
    background-color: var(--purple-2);
    transition: background-color 0.1s ease-in-out;
  }
}
</style>
