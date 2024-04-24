const { Sequelize, DataTypes } = require('sequelize');
const dataBase = require('../dataBase/connection');

const Tasks = dataBase.define('tasks',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    creator:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    project:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    estimate:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    scope:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    team:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    time:{
        type:DataTypes.DECIMAL,
        allowNull: false,
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    level:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    deliverable:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    notes:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
});

Tasks.sync();

module.exports = Tasks;