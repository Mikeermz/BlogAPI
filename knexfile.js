// Update with your config settings.
const { CONNECTIONS } = require('./src/constants/config');
const { DB_URL } = CONNECTIONS;

module.exports = {
  development: {
    client: 'pg',
    connection: DB_URL, // Variables de entorno ---> variables de SO y sirven para guardar secretos,
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds'}
  },

  staging:  {
    client: 'pg',
    connection: DB_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds'}
  },

  production: {
    client: 'pg',
    connection: DB_URL, 
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds'}
  },
};
