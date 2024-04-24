const Sequelize = require('sequelize');
const config = require('./db');

const dataBase = new Sequelize(config.dataBase,config.user,config.password,{
    host:config.url,
    dialect:'mysql'
});

try {
    dataBase.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
module.exports = dataBase;