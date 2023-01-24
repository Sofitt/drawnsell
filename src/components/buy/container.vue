<template>
  <div class="container">
    <div class="wrapper">
      <carousel
        :content="carouselContent[0]"
        @drag-item="dragItem"
      />
      <basket />
      <carousel
        :content="carouselContent[1]"
        @drag-item="dragItem"
      />
    </div>
  </div>
</template>

<script>
import carousel from '@/components/buy/components/carousel'
import basket from '@/components/buy/components/basket'

export default {
  name: 'container',
  components: {
    carousel,
    basket
  },
  setup () {
    const cfg = {
      position: 'absolute',
      top: '-100%',
      left: '-100%',
      width: 100 + 'px',
      height: 100 + 'px',
      objectFit: 'contain'
    }
    let evt
    let cardData
    const setDataTransfer = () => {
      const itemData = JSON.stringify(cardData)
      evt.dataTransfer.setData('data', itemData)
    }
    const setGhostImg = () => {
      const ghost = document.getElementById('ghost')
      let img = new Image()
      let isFirefox = navigator.userAgent.includes('Firefox')
      let ctx = document.createElement('canvas').getContext('2d')
      evt.dataTransfer.dropEffect = 'copy'
      evt.dataTransfer.effectAllowed = 'copy'
      if (isFirefox) {
        ctx.fillRect(0, 0, 100, 100)
        ctx.fillStyle = 'blue'

        ctx.drawImage(img, 0, 0, img.width, img.height)
        evt.dataTransfer.setDragImage(ctx.canvas, 42, 40)

        return
      }
      if (!ghost) {
        img.src = require(`@/assets/buy-carousel/${cardData.img}`)
        img.id = 'ghost'
        Object.assign(img.style, cfg)
        document.body.appendChild(img)
      } else {
        img = ghost
      }
      evt.dataTransfer.setDragImage(img, 50, 50)
    }
    const dragItem = ({ e, data }) => {
      evt = e
      cardData = data
      setDataTransfer()
      setGhostImg()
    }

    return {
      dragItem,
      carouselContent: [
        [
          {img: 'bg1.png', name: 'Colbasa', cost: 15, isLast: true},
          {img: 'bg1.png', name: 'Colbasa', cost: 5, count: 1},
          {img: 'bg1.png', name: 'Colbasa', cost: 35, count: 1},
          {img: 'bg1.png', name: 'Colbasa', cost: 5, count: 1},
          {img: 'bg1.png', name: 'Colbasa', cost: 35, count: 1},
          {img: 'bg1.png', name: 'Colbasa', cost: 5, count: 1},
          {img: 'bg1.png', name: 'Colbasa', cost: 35, count: 1},
          {img: 'bg1.png', name: 'Colbasa', cost: 25, count: 1}
        ],
        [
          {img: 'bg2.png', name: 'Servilatt', cost: 55, count: 1},
          {img: 'bg2.png', name: 'Servilatt', cost: 65, count: 1},
          {img: 'bg2.png', name: 'Servilatt', cost: 85, count: 1},
          {img: 'bg2.png', name: 'Servilatt', cost: 55, count: 1},
          {img: 'bg2.png', name: 'Servilatt', cost: 65, count: 1},
          {img: 'bg2.png', name: 'Servilatt', cost: 85, count: 1},
          {img: 'bg2.png', name: 'Servilatt', cost: 55, count: 1},
          {img: 'bg2.png', name: 'Servilatt', cost: 65, count: 1},
          {img: 'bg2.png', name: 'Servilatt', cost: 85, count: 1}
        ]
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    padding: 25px 0;
  }
  .basket {
    width: 650px;
    aspect-ratio: 1;
  }
</style>
