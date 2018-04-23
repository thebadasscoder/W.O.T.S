const photoSeed = require('./photo-seed');
const userSeed = require('./user-seed');
const reportSeed = require('./report-seed');

var db = require('../models');

db.sequelize.sync({force: true})
.then(()=>{
	photoSeed();
})
.then(()=>{
	userSeed();
})
.then(()=>{
	reportSeed();
})