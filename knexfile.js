// Update with your config settings.
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true, //Needed for sqlite
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
  // Allows foreign keys to be protected
  pool: { //SQLite specific
    afterCreate: (conn, done) => {
      // Runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done) // Turns on FK enforcement
    }
  }
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      filename: './data/recipes.db3'
  }},
  testing: {
    ...sharedConfig,
    connection: {
      filename: './data/testing.db3'
  }},
  production: {
    ...sharedConfig,
    connection: {
      filename: './data/recipes-production.db3'
  }}
}
