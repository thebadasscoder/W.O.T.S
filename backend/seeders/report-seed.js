'use strict'

const Report = require('../models').Report;

let reportArr = [


{
    type: 'Graffiti',
    date: '4/22/2018',
    address: '84 Greene Ave',
    city: 'Brooklyn',
    state:'New York',
    zipcode:'11201',
    county:'New York',
    number_of_suspects:1
  },


{
    type: 'Liter',
    date:'04/22/2018',
    address:'28-68 Thompson Street',
    city:'Queens',
    state:'New York',
    zipcode:'11105',
    county:'New York',
    number_of_suspects:3

  },


];

const reportSeed = ()=>{
  //Passing the array through and updating multiple instances at a time
  Report.bulkCreate(reportArr);
}

module.exports = reportSeed