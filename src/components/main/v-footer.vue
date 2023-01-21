<template>
  <div class="v-footer">
    <img
      :src="require('@/assets/main/wave_btp.png')"
      alt=""
    >
    <audio
      id="myAudio"
      loop
    >
      <source
        :src="require('@/assets/main/DJ Electrohead - Hit The Floor.mp3')"
        type="audio/mp3"
      >
      Your browser does not support the audio element.
    </audio>
    <span
      id="music-starter"
    />
    <hamster />
    <h4 class="title">
      Draw n Sell
    </h4>
  </div>
</template>

<script>
import hamster from '@/components/main/components/hamster'

export default {
  name: 'v-footer',
  components: {
    hamster
  },
  data() {
    return {
      audio: null,
      lastVolume: 0.20
    }
  },
  watch: {
    lastVolume (value) {
      this.audio.volume = value
    }
  },
  mounted() {
    this.audio = document.getElementById('myAudio')
    this.observerCreate()
  },
  methods: {
    observerCreate () {
      const button = document.getElementById('music-starter')
      let options = {
        rootMargin: '0px',
        threshold: 0.3
      }
      let observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.playAudio()
          let isAudioPlaying = this.audio.readyState === 4
          isAudioPlaying && observer.disconnect()
        }
      }, options)
      observer.observe(button)
    },
    playAudio () {
      let returnValue
      this.audio.volume = this.lastVolume
      this.audio.play()
      document.addEventListener('scroll', () => {
        const maxVolume = 0.20
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 100
        const volumeFromPercent = Math.round(scrolled) * maxVolume / 100
        this.lastVolume = volumeFromPercent
      }, false)

      return returnValue
    }
  }
}
</script>

<style scoped lang="scss">
.v-footer {
  z-index: 1;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow: hidden;
  height: 1388px;
  & img {
    z-index: -1;
    pointer-events: none;
    position: absolute;
    object-fit: cover;
    width: 2304px;
    height: auto;
  }
}
.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 24px;
  font-family: 'Lexend Exa', serif;
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
  mix-blend-mode: difference;
}
</style>
