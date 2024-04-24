//DATABASE
const dataBase = require('./models/dataBase/connection');
const dbConfig = require('./models/dataBase/db');

//DATABASE TABLES
const Tasks = require('./models/tables/Tasks');
const Estimates = require('./models/tables/Estimates');
const Artists = require('./models/tables/Artists');
const Alocations = require('./models/tables/Alocations');
const Projects = require('./models/tables/Projects');
const SubTasks = require('./models/tables/SubTasks');
const Pipelines = require('./models/tables/Pipelines');

//EXPRESS 
const express = require('express');
const app = express();
const PORT = 3000;

//ROUTERS
const estimatesRouter = require('./routes/estimates.router');

//URL 
const path = require('path');
const projectName = 'project-menagement';

//ROUTERS


//MIDDLEWARES
app.use(`/${projectName}`,express.static(path.join(__dirname,'view','public')));
app.use(express.json());


//ENDPOINTS
app.use(`/${projectName}/estimates`,estimatesRouter);

app.listen(PORT,()=>{
    console.log('Server is running.');
});