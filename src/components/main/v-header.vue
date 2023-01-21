<template>
  <div class="v-header">
    <nav class="left">
      <component
        :is="isMainPage.value ? 'span' : 'a'"
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
          :to="`/` + page.name"
        >
          <img
            :src="page.icon"
            :alt="`Страница ` + page.name"
          >
        </router-link>
      </nav>
      <button class="login">
        LOGIN
      </button>
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

    return {
      isMainPage,
      routeTo,
      pages
    }
  }
}
</script>

<style scoped lang="scss">
  .v-header {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 30px 0;
  }
  .left {
    font-family: 'Kurale';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    color: #FFFFFF;
    & a {
      cursor: pointer;
      text-decoration: none;
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
    font-family: 'Kurale';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: black;
    background-color: var(--yellow-2);
    padding: 3px 31px;
  }
</style>
