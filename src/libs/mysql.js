const config = require('../config/config.js')
const mysql = require('mysql2')

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password
})

module.exports = pool
