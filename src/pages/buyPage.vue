<template>
  <div class="buy-page">
    <black-sun />
    <div class="container-wrapper">
      <intro />
      <container
        v-if="productList"
        :cards="productList"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import intro from '@/components/buy/intro'
import container from '@/components/buy/container'
import buy from '@/service/buy'

export default {
  name: 'buy-page',
  components: {
    intro,
    container
  },
  setup() {
    let productList = ref(null)
    const getProductList = async () => {
      let data = await buy.getList()

      return data
    }

    return {
      productList,
      getProductList
    }
  },
  async beforeCreate() {
    this.productList = await this.getProductList()
  }
}
</script>

<style scoped lang="scss">
.buy-page {
  padding-top: 40px;
  padding-bottom: 500px;
}
</style>
