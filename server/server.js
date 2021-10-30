const express = require('express')
require ('dotenv').config()
const products =require('./data/products.js')
const path = require('path')


const app = express();



app.get('/api/products', (req, res) => {
  console.log(products)
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id == req.params.id)
  res.send(product)
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`server running on ${process.env.NODE_ENV} mode on port ${PORT}`))