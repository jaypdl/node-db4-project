const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const RecipesRouter = require('./recipes/recipes-router')

const server = express()

// Middlewares
server.use(helmet())
server.use(express.json())
server.use(cors())
if (process.env.NODE_ENV === 'development') {
  server.use(morgan('dev'))
}

// Routes
server.use('/api/recipes', RecipesRouter)

server.get('/', (req, res) => {
  res.send(`<h1>The API is Up!</h1>`)
})

server.use('*', (req, res) => {
  res.status(404).json({ message: `Sorry, this is not a valid location for a ${req.method} request`})
})

module.exports = server