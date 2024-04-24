const { Sequelize, DataTypes } = require('sequelize');
const dataBase = require('../dataBase/connection');

const Estimates = dataBase.define('estimates',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    project:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    notes:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type:DataTypes.STRING,
        allowNull: false,
    }
});

Estimates.sync();

module.exports = Estimates;