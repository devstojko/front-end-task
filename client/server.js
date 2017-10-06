const {createServer}= require('http')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')

const normalizePort = port => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 3001)

const app = express()
const dev = app.get('env') !== 'production'

const users = require('../data/users.json');
const uploads = require('../data/uploads.json');
const carPurchases = require('../data/car_purchases.json');
const testData = require('../data/testData.json');

if (!dev) {
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))

  app.use(express.static(path.resolve(__dirname, 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })

  app.get('/table/users', (req, res) => {
    res.json(users)
  });
  
  app.get('/table/uploads', (req, res) => {
    res.json(uploads)
  });
  
  app.get('/table/carPurchases', (req, res) => {
    res.json(carPurchases)
  });
  
  app.get('/table/testData', (req, res) => {
    res.json(testData)
  });
}

if (dev) {
  app.use(morgan('dev'))
}

const server = createServer(app)

server.listen(PORT, err => {
  if (err) throw err

  console.log('Server started!')
})