require('dotenv').config()

const config = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD
}

module.exports = config
