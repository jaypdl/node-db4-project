// Need the knex library
// Need the knexfile & need to specify diff config for different environments

const knex = require('knex')
const configs = require('../knexfile')
const env = process.env.NODE_ENV || 'development'

module.exports = knex(configs[env])
// Tells knex to use the specified knexfile config based on the environment