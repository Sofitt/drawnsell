<template>
  <div class="v-header">
    <div
      id="plane"
      class="plane"
    />
    <div class="container-wrapper">
      <div class="v-header_body">
        <nav class="left">
          <component
            :is="isMainPage ? 'span' : 'a'"
            class="user"
            @click="routeTo"
          >
            User#1111
          </component>
          <!-- Можно сделать меню пользователя с ссылками на свои работы -->
        </nav>
        <div class="right">
          <nav class="pages">
            <router-link
              v-for="page of pages"
              :key="page.name"
              :to="{name: page.name}"
            >
              <img
                :src="page.icon"
                :alt="`Страница ` + page.name"
              >
            </router-link>
          </nav>
          <button
            class="login"
            @click="login"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router/dist/vue-router'
import { computed } from 'vue'

export default {
  name: 'v-header',
  components: {},
  setup () {
    const router = useRouter()
    const route = useRoute()
    const pages = [
      { name: 'draw', icon: require('@/assets/icons/pen.svg') },
      { name: 'buy', icon: require('@/assets/icons/business.svg') }
    ]
    const routeTo = () => {
      if (!isMainPage.value) {
        router.push({name: 'main'})
      }
    }
    const isMainPage = computed( () => {
      return route.name === 'main'
    })
    const colorPlaneSlide = (isSlideDown) => {
      document.getElementById('plane').style.transform = isSlideDown ? 'translateY(0%)' : ''
    }
    const observeAnchor = () => {
      const anchor = document.createElement('span')
      anchor.id = 'header-anchor'
      Object.assign(anchor.style,{position: 'absolute', top: 0})
      document.body.appendChild(anchor)
      let options = {
        rootMargin: '0px',
        threshold: 0.3
      }
      let observer = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) {
          colorPlaneSlide(true)
        } else {
          colorPlaneSlide(false)
        }
      }, options)
      observer.observe(document.getElementById('header-anchor'))
    }
    const login = () => {
      // todo teleport?
    }

    return {
      observeAnchor,
      isMainPage,
      routeTo,
      pages,
      login
    }
  },
  async mounted() {
    await this.$nextTick()
    this.observeAnchor()
  }
}
</script>

<style scoped lang="scss">
  .v-header {
    z-index: 5;
    position: relative;
    max-width: 1340px;
    margin: 0 auto;
    @media (max-width: 900px) {
      position: fixed;
      width: 100%;
      height: 40px;
      top: 0;
    }
    & .plane {
      z-index: 4;
      position: fixed;
      top: 0;
      width: 100%;
      height: 45px;
      background-color: var(--red);
      transform: translateY(-100%);
      transition: transform .2s ease;
      @media (min-width: 900px) {
        display: none;
      }
    }
    & .container-wrapper {
      position: relative;
    }
  }
  .v-header_body {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
    @media (max-width: 1380px) {
      left: 60px;
      width: calc(100% - 120px);
    }
    @media (max-width: 640px) {
      left: 0;
      width: calc(100% - 60px);
      padding: 5px 30px 0;
    }
    @media (max-width: 400px) {
      width: calc(100% - 30px);
      padding: 5px 15px 0;
    }
  }
  .left {
    font-family: 'Kurale Regular';
    font-size: 24px;
    color: #FFFFFF;
    & a {
      cursor: pointer;
      text-decoration: none;
    }
    & span {
      cursor: default;
    }
  }
  .right {
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 32px;
  }
  .pages {
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 8px;
    & a {
      min-width: 32px;
      width: 32px;
      height: 32px;
      border-radius: 50px;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      background-color: white;
      &.router-link-active {
        background-color: var(--green-1);
      }
      &:hover {
        background-color: #c6c6c6;
      }
      & img {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }
    }
  }
  .login {
    cursor: pointer;
    font-family: 'Kurale Regular';
    font-size: 18px;
    color: black;
    background-color: var(--yellow-2);
    padding: 3px 31px;
  }
</style>
