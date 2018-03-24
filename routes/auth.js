const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var userService = require('../services/auth.service');



router.post('/signup', urlencodedParser,(req, res, next) => {
	if(!req.body) {return res.sendStatus(400)};
	let user = {
		"firstname": req.body.firstname,
		"lastname": req.body.lastname,
		"username": req.body.username,
		"password": req.body.lastname
	}
	console.log('user:', user)	
	userService.signup(user)
		.then(newUser => {
			res.send(`User created successfully! User ID is ${newUser.id}`);
			//res.json(newUser.id);
		}, err => {
			res.status(400).send("user already exists!");
		})
		
	
})



module.exports = router;