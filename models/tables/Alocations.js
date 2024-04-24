const { Sequelize, DataTypes } = require('sequelize');
const dataBase = require('../dataBase/connection');

const Alocations = dataBase.define('alocations',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    artist:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    project:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    task:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    status:{
        type:DataTypes.STRING,
        allowNull: false,
    },
});

Alocations.sync();

module.exports = Alocations;