const dotEnv = require('dotenv');

dotEnv.config();

module.exports = {
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_DB: process.env.DATABASE_DB,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT,
};
