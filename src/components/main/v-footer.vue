<template>
  <div class="v-footer">
    <div
      class="sun"
    />
    <img
      class="back"
      :src="require('@/assets/main/wave_btp.webp')"
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
    <h4 class="project-title">
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
      this.audio.volume = this.lastVolume
      this.audio.play()
      document.addEventListener('scroll', this.controlVolume, false)
    },
    controlVolume () {
      const maxVolume = 0.20
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      const volumeFromPercent = Math.round(scrolled) * maxVolume / 100
      this.lastVolume = volumeFromPercent
    }
  }
}
</script>

<style scoped lang="scss">
.v-footer {
  padding-top: 98px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  min-height: 1388px;
  & .back {
    z-index: -1;
    pointer-events: none;
    position: absolute;
    object-fit: cover;
    width: 2304px;
    height: auto;
  }
  & .sun {
    z-index: -2;
    position: absolute;
    width: 488px;
    height: 488px;
    top: 134px;
    left: 53%;
    transform: translateX(-50%);
    background: rgba(255, 78, 169, 0.25);
    box-shadow: 0px -2px 100px 20px rgba(238, 40, 101, 0.25);
    border-radius: 100% 100%;
    @media (max-width: 640px) {
      width: 300px;
      height: 300px;
    }
  }
  & #music-starter {
    position: absolute;
    top: 0;
  }
  & .hamster {
    @media (max-width: 640px) {
      transform: translateY(-80px);
    }
  }
}
.project-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 24px;
  text-align: center;
  color: #FFFFFF;
  mix-blend-mode: difference;
}
</style>
