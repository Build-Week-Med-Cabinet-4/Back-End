const knex = require('knex');

const environment = process.env.DB_ENV || "development";
const knexConfig = require('../knexfile.js');
console.log(knexConfig);

module.exports = knex(knexConfig[environment]);
