'use strict'

const Photo = require('../models').Photo;

let photoArr = [


{
    url: 'http://i1044.photobucket.com/albums/b441/twilsonpierce/joker-TA_zpsopxrhfym.jpg',
    match: 100
  },


{
    url: 'http://i1044.photobucket.com/albums/b441/twilsonpierce/joker-TA_zpsopxrhfym.jpg',
    match: 60

  },


];

const photoSeed = ()=>{
	//Passing the array through and updating multiple instances at a time
	Photo.bulkCreate(photoArr);
}

module.exports = photoSeed