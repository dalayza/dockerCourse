const express = require('express')
const restful = require('restful')

const server = express()
const mongoose = restful.mongoose

const bodyParser = require('body-parser')
const cors = require('cors')

// Database conection
mongoose.promise = global.Promise
mongoose.connect('mongodb://db/mydb')

// Teste
server.get('/', (req, res, next) => res.send('Backend'))

// Start server
server.listen(3000)
