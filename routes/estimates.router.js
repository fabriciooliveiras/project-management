const express = require('express');


const estimatesRouter = express.Router();

estimatesRouter.get('/',(req,res)=>{
    res.json({message:'ESTIMATES'});
    console.log('teste');
})

module.exports = estimatesRouter;



