const express = require('express');
const estimatesController = require('../controllers/estimates.controller');

const estimatesRouter = express.Router();

estimatesRouter.get('/estimates',estimatesController.getEstimates);
estimatesRouter.get('/tasks',estimatesController.getTasks);
estimatesRouter.post('/estimate',estimatesController.postEstimate);

module.exports = estimatesRouter;



