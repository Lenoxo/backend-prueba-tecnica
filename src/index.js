const express = require('express')
const app = express()
const ProductsService = require('./services/products.service.js')
const port = 8080

app.get('/products', (req, res) => {
  try {
    const service = new ProductsService()
    const result = service.getProducts()
    res.json(result)
  } catch (error) {
    console.error(error)
  }
})

app.post('/products', (req, res) => {
  try {
    res.send('You got the products')
  } catch (error) {
    console.error(error)
  }
})

app.put('/products', (req, res) => {
  try {
    res.send('You got the products')
  } catch (error) {
    console.error(error)
  }
})

app.delete('/products', (req, res) => {
  try {
    res.send('You got the products')
  } catch (error) {
    console.error(error)
  }
})

app.listen(port, () => console.log(`Server running in port: ${port}`))
