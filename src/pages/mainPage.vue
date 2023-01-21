<template>
  <div class="main-page container">
    <div class="intro">
      <img
        :src="require('@/assets/main/intro.webp')"
        alt=""
      >
      <h1 class="title">
        Draw n Sell
      </h1>
    </div>
    <div class="notice">
      <img
        class="bg"
        :src="require('@/assets/main/paints.webp')"
        alt="Изображение красок"
      >
      <div class="box">
        <div class="info">
          <p>
            <span class="c-yellow-2">Открой</span> мир <span class="c-red">фантазий</span>
          </p>
          <p>
            Заработай материально и обогати духовно
          </p>
          <v-button
            transparent
            rounded
          >
            Узнать больше
          </v-button>
        </div>
        <img
          :src="require('@/assets/decor/particle1.svg')"
          alt=""
        >
        <img
          :src="require('@/assets/decor/particle2.svg')"
          alt=""
        >
        <img
          :src="require('@/assets/decor/particle3.svg')"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>

import VButton from '@/components/UI/v-button'

export default {
  name: 'main-page',
  components: { VButton }
}
</script>

<style scoped lang="scss">
.main-page {
  display: flex;
  flex-flow: column;
  height: unset !important;
}
.intro {
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  min-height: 1184px;
  margin-bottom: 234px;
  overflow: hidden;
  @media (max-width: 1200px) {
    min-height: 900px;
  }
  & h1 {
    position: absolute;
    bottom: 42px;
    font-family: 'Lexend Exa';
    font-style: normal;
    font-weight: 900;
    font-size: 64px;
    line-height: 80px;
    color: #FFFFFF;
    mix-blend-mode: difference;
  }
  & img {
    position: absolute;
    width: 100%;
    object-fit: contain;
    @media (max-width: 900px) {
      object-fit: cover;
      width: unset;
    }
  }
}
.notice {
  position: relative;
  height: 512px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 228px;
  overflow: hidden;
  & .bg {
    z-index: 1;
    position: absolute;
    width: 125%;
    height: 100%;
    object-fit: cover;
    object-position: 0 -102px;
    transform: translateY(-18px);
    @media (max-width: 1200px) {
      object-position: -50%;
      width: 150%;
    }
    @media (max-width: 600px) {
      object-position: 0;
      width: 100%;
    }
  }
}
.box {
  position: relative;
  z-index: 2;
  padding: 16px 38px 28px;
  background-color: var(--purple-3);
  border-radius: 30px;
  max-width: 560px;
  & .info {
    display: flex;
    flex-flow: column;
    align-items: center;
    & p {
      z-index: 1;
      font-family: 'Kurale';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 35px;
      text-align: center;
      color: white;
      &:last-of-type {
        margin-bottom: 46px;
      }
    }
    & button {
      z-index: 1;
      width: fit-content;
    }
  }
  & img {
    position: absolute;
    object-fit: contain;
    &:nth-of-type(1) {
      right: 15px;
      top: 42px;
    }
    &:nth-of-type(2) {
      right: 78px;
      bottom: 20px;
    }
    &:last-of-type {
      left: 20px;
      top: 20px;
    }
  }
}
</style>
