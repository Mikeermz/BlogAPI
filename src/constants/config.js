require('dotenv').config(); // esto va a cargar las variables de entorno

const TOKENS = { 
  SECRET_KEY: process.env.SECRET_KEY,
};

const CONNECTIONS = {
  DB_URL: process.env.DB_URL,
};

const UNIQUE = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 9000,
};

module.exports = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT || 9000,
  SECRET_KEY: process.env.SECRET_KEY,
  ENV: process.env.NODE_ENV || 'development',
  TOKENS,
  CONNECTIONS,
  UNIQUE
}