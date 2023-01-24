const fs = require('fs')

let buyPage = [
  { id: 0, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 1, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 2, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 3, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 4, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 5, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 6, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 7, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 8, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 9, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 10, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 11, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 12, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 13, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 14, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 15, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 16, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 17, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 18, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 19, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 20, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 21, name: 'Colbasa', img: './images/Colbasa.png', cost: 12, count: 1},
  { id: 10, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 11, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 12, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 13, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 14, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 15, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 16, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 17, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 18, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 19, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 20, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 21, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 22, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 23, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 24, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 25, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 26, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 27, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 28, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 29, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1},
  { id: 30, name: 'Servilatt', img: './images/Servilatt.png', cost: 12, count: 1 }
]
exports.buyModule = class catalog {
  static getCatalog () {
    return buyPage
  }
  static getImages () {
    fs.readdir('./images/', (err, files) => {
      let all = Promise.allSettled(files.map(fileName => {
        return new Promise((res, rej) => {
          fs.readFile('./images/' + fileName, (err, file) => {
            let name = fileName.replace(/\.(\w*)/, '')
            res({ [name]: file })
          })
        })
      }))
        .then(res => res.reduce((obj, i) => {
          const name = Object.keys(i.value)
          obj[name] = i.value[name]

          return obj
        }, {}))
        .then(mapped => this.computeCatalog.call(this, mapped))
    })
  }
  static computeCatalog (imagesBuffers) {
    for (let i = 0; i<buyPage.length; i++) {
      const buffer = imagesBuffers[buyPage[i].name] || null
      if (buffer) {
        buyPage[i].img = buffer
      }
    }
    console.debug(buyPage[5])
  }
}

