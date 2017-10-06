const express = require('express')

const users = require('../JSONdata/users.json');
const uploads = require('../JSONdata/uploads.json');
const carPurchases = require('../JSONdata/car_purchases.json');
const testData = require('../JSONdata/testData.json');

const routes = [
  '/',
  'uploads',
  'carPurchase'
];


const app = express();

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

console.log(__dirname)

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

//Redirect all non api requests to the index

const port = process.env.PORT || 3001;

app.listen(port);