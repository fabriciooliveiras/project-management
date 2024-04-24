const { Sequelize, DataTypes } = require('sequelize');
const dataBase = require('../dataBase/connection');

const Pipelines = dataBase.define('pipelines',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    team:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    scope:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    deliverable:{
        type:DataTypes.STRING,
        allowNull: false,
    }
});

Pipelines.sync();

module.exports = Pipelines;