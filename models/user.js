let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
	id: Number,
	firstname: String,
	lastname: String,
	username: String,
	password: String

});



module.exports = mongoose.model('UserModel', UserSchema);