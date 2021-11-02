import path from 'path'
import dotenv from 'dotenv'
//import colors npm i colors
import express from 'express'
import products from './data/products.js'


import connectDB from './config/db.js'

const PORT = process.env.PORT || 8000

dotenv.config()

const app = express();

connectDB()

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



app.listen(PORT, console.log(`server running on ${process.env.NODE_ENV} mode on port ${PORT}`))