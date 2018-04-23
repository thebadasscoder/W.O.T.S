const reportRouter = require('express').Router();
const report = require('../models').Report;
const path = require('path');


//** This will handle any routes going to localhost:3000/api/reports

//ALL REPORTS HERE 

const allReports = (req,res)=>{
	report.findAll()
		.then((data)=>{
			res.send(data);
		})
		.catch((error)=>{
			res.sendStatus(500);
		})
}


//CREATE A NEW REPORT

reportRouter.route('/')
	.get(allReports)


module.exports = reportRouter;

