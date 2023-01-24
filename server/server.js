const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 8000

// modules
const { buyModule } = require('./modules/buy')

app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

buyModule.getImages()
let buyCatalog = buyModule.getCatalog()

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
})
app.get('/pages/buy', (req, res) => {
  res.send(buyCatalog)
})
app.get('/pages/buy/:id', (req, res) => {
  const id = req.params.id
  const buyItem = buyCatalog.find(i => i.id === +id)
  res.send(buyItem)
})

// listen on the port
app.listen(port)
