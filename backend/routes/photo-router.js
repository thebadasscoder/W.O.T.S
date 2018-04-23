const photoRouter = require('express').Router();
const photo = require('../models').Photo;
const path = require('path');


//** This will handle any routes going to localhost:3000/api/photos

//ALL PHOTOS 

const allPhotos = (req,res)=>{
	photo.findAll()
		.then((data)=>{
			res.send(data);
		})
		.catch((error)=>{
			res.sendStatus(500);
		})
}


//UPLOAD NEW PHOTO HERE 




photoRouter.route('/')
	.get(allPhotos)


module.exports = photoRouter;

