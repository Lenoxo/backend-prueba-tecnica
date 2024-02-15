const pool = require('../libs/mysql.js')
class ProductsService {
  constructor() { }

  getProducts() {
    const result = pool.query("SELECT * FROM DbTest")
    return result
  }

  getProductById() { }

  updateProductById(id) { }

  deleteProductById(id) { }
}

module.exports = ProductsService
