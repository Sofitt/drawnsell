const fs = require('fs')

let buyPage = [
  { id: 0, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 1, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 2, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 3, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 4, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 5, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 6, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 7, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 8, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 9, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 10, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 11, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 12, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 13, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 14, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 15, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 16, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 17, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 18, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 19, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 20, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 21, name: 'Colbasa', ext: 'webp', cost: 12, count: 1},
  { id: 10, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 11, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 12, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 13, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 14, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 15, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 16, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 17, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 18, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 19, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 20, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 21, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 22, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 23, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 24, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 25, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 26, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 27, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 28, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 29, name: 'Servilatt', ext: 'webp', cost: 12, count: 1},
  { id: 30, name: 'Servilatt', ext: 'webp', cost: 12, count: 1 }
]
exports.buyModule = class catalog {
  static getCatalog () {
    return buyPage
  }
  static async getImages () {
    const images = await new Promise((res) => {
      fs.readdir('./images/', (err, files) => {
        const filesList = files.map(file => file.replace(/\.(\w*)/, ''))
        res(filesList)
      })
    })

    return images
  }
}

