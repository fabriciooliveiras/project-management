const { Sequelize, DataTypes } = require('sequelize');
const dataBase = require('../dataBase/connection');

const Projects = dataBase.define('projects',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    }
});

Projects.sync();

module.exports = Projects;