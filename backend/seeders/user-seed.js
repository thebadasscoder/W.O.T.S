'use strict'

const User = require('../models').User;

let userArr = [


{
    email_address: 'jaydensmith@gmail.com',
    fullName: 'Jayden Smith',
    password: 'lovemusicx3'
  },


{
    email_address: 'andrewgreene@yahoo.com',
    fullName: 'Andrew Greene',
    password:'livelearngrow'

  },


];

const userSeed = ()=>{
	//Passing the array through and updating multiple instances at a time
	User.bulkCreate(userArr);
}

module.exports = userSeed