// Establecer conexion con base de datos // Establish connection to data base
const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Audioslave1',
  port: 5432,
  database: 'Check-in',
  logging: false,
});

// exportamos la constante db atravez de este metodo
module.exports = { db, DataTypes };
