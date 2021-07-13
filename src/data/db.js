// aqui vamos a crear la conexion ya  a la BD
const knex = require('knex');
const knexfile = require('../../knexfile');
const { ENV: env } = require('../constants/config')

const configOptions = knexfile[env];

module.exports = knex(configOptions); // aqui se conecta knex a la BD
