const { Sequelize, DataTypes } = require('sequelize');
const dataBase = require('../dataBase/connection');

const Artists = dataBase.define('artists',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    startDate:{
        type:DataTypes.DATE,
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    position:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    picture:{
        type:DataTypes.STRING,
        allowNull: false,
    },
});

Artists.sync();

module.exports = Artists;