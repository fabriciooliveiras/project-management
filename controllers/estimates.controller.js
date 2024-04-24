const Estimates = require('../models/tables/Estimates');

function getEstimates(req,res){
    Estimates
    .findAll({raw:true,})
    .then(estimates=>res.json(estimates))
    .catch(error=>console.log(error));
    //fetch('http://localhost:3000/project-menagement/estimates/estimateS',{method:'GET'}).then(data=>data.json()).then(response=>console.log(response));
}

function getTasks(){

}

function postEstimate(req,res){
    Estimates
    .create({project:1,notes:'texto grande',status:'In Progress'})
    .then(()=>{
        res.json({message:'New estimate created'});
    })
    .catch((error)=>{
        console.log(error);
    });
    //fetch('http://localhost:3000/project-menagement/estimates/estimate',{method:'POST',body:JSON.stringify({message:'teste'})}).then(data=>data.json()).then(response=>console.log(response));
}

module.exports = {
    getEstimates,
    getTasks,
    postEstimate
}