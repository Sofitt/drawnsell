import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'

import '@/assets/style/main.scss'

import blackSun from '@/components/UI/black-sun'


createApp(App)
  .use(router)
  .use(store)
  .component('black-sun', blackSun)
  .mount('#app')
