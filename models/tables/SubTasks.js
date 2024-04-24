const { Sequelize, DataTypes } = require('sequelize');
const dataBase = require('../dataBase/connection');

const SubTasks = dataBase.define('subTasks',{
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
    options:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    time:{
        type:DataTypes.DECIMAL,
        allowNull: false,
    },
    feedback:{
        type:DataTypes.DECIMAL,
        allowNull: false,
    },
    risk:{
        type:DataTypes.DECIMAL,
        allowNull: false,
    },
    total:{
        type:DataTypes.DECIMAL,
        allowNull: false,
    },
    benchmark:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    task:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    notes:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    pipeline:{
        type:DataTypes.INTEGER,
        allowNull: false,
    }
});

SubTasks.sync();

module.exports = SubTasks;