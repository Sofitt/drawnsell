<template>
  <div
    class="basket"
  >
    <div
      ref="zone"
      class="drop-zone"
      @drop.self="drop"
      @dragenter.prevent="setShowInfo(true)"
      @dragleave.prevent="setShowInfo(false)"
      @dragover.prevent
      @mouseenter="setShowInfo(true)"
      @mouseleave="setShowInfo(false)"
    />
    <ul
      class="info"
      :class="{__hover: showInfo}"
    >
      <li
        v-for="item of shopItems"
        :key="item.img"
        :data-src="item.name"
        @mouseenter="highlightItem(item)"
        @mouseleave="highlightItem(item, false)"
      >
        <div class="text">
          {{ item.name }} /
          {{ item.cost }} руб
          {{ item.count }} кол-во
        </div>
        <div class="actions">
          <button
            class="btn-add"
            @click="addItem(item)"
          />
          <button
            class="btn-sub"
            @click="subtractItem(item)"
          />
          <button
            class="btn-remove"
            @click="removeItem(item)"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'basket',
  emits: ['drop'],
  components: {},
  data () {
    return {
      shopItems: [],
      showInfo: false,
      cfg: {
        position: 'absolute',
        zIndex: '100',
        pointerEvents: 'none',
        width: 100 + 'px',
        height: 100 + 'px',
        transform: 'translate(-50%, -50%)',
        objectFit: 'contain'
      }
    }
  },
  methods: {
    addItem (item) {
      item.count++
    },
    subtractItem (item) {
      if (item.count - 1 >= 1) {
        item.count--
        if (document.querySelectorAll(`[data-name='${item.name}']`).length > 1) {
          let removeItem = document.querySelector(`[data-name='${item.name}']`)
          removeItem.remove()
        }
      }
    },
    removeItem (item) {
      const index = this.shopItems.findIndex(product => product.name === item.name)
      this.shopItems.splice(index, 1)
      let removeList = document.querySelectorAll(`[data-name='${item.name}']`)
      for (let item of removeList) {
        item.remove()
      }
    },
    highlightItem (item, highlight = true) {
      let imgNodeList = document.querySelectorAll(`[data-name='${item.name}']`)
      if (highlight) {
        for (let node of imgNodeList) {
          node.style.filter = 'hue-rotate(-360deg)saturate(200%)'
          node.style.transition = 'filter 0.6s ease-in-out'
          node.style.border = '2px solid blue'
        }
      } else {
        for (let node of imgNodeList) {
          node.style.filter = ''
          node.style.transition = 'filter 0.3s ease-in-out'
          node.style.border = ''
        }
      }
    },
    renderImage (e, data) {
      let img = document.createElement('img')
      img.src = require(`@/assets/buy-carousel/${data.img}`)
      img.style.top = e.layerY + 'px'
      img.style.left = e.layerX + 'px'
      img.style.border = '1px solid transparent'
      img.setAttribute('data-name', data.name)
      Object.assign(img.style, this.cfg)
      this.$refs.zone.appendChild(img)
    },
    addProductCard (data) {
      const index = this.shopItems.findIndex(product => product.name === data.name)
      if (index >= 0) {
        this.shopItems[index].count++
      } else {
        this.shopItems.push(data)
      }
    },
    drop (e) {
      let data = JSON.parse(e.dataTransfer.getData('data'))
      this.addProductCard(data)
      this.renderImage(e, data)
    },
    setShowInfo (state) {
      this.showInfo = state
    }
  }
}
</script>

<style scoped lang="scss">
.basket {
  position: relative;
  z-index: 2;
  &:hover {
    & .info {
      transform: translateY(0%);
      transition: transform .1s ease-in-out;
    }
  }
}
.drop-zone {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #313131;
  & > img {
    filter: contrast(200%) drop-shadow(16px 16px 20px blue)
  }
}
.info {
  z-index: -1;
  position: absolute;
  display: flex;
  flex-flow: column;
  gap: 10px 0;
  padding: 20px;
  top: 100%;
  width: calc(100% - 41px);
  height: 100%;
  max-height: 200px;
  overflow: auto;
  background-color: white;
  transform: translateY(-100%);
  transition: transform .1s ease-in-out;
  &.__hover {
    transform: translateY(0%);
    transition: transform .1s ease-in-out;
  }
  & li {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2px 0;
    border-bottom: 1px solid gray;
    &:hover {
      background-color: #fff96c;
    }
  }
  .actions {
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 10px;
    .btn-add, .btn-remove, .btn-sub {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 500;
      padding: 5px;
      color: white;
      width: 20px;
      height: 20px;
    }
    .btn-sub {
      background-color: #0088ff;
      &:before {
        content: '-';
        transform: translate(0, -1px);
      }
    }
    .btn-add {
      background-color: green;
      &:before {
        content: '+';
        transform: translate(0, -1px);
      }
    }
    .btn-remove {
      background-color: red;
      &:before {
        content: '+';
        transform: rotate(-45deg)translate(0, -1px);
      }
    }
  }
}
</style>
