const UserModel = require('../models/user.js');

signup = (newUser) => {
	return new Promise((resolve, reject) => {
		UserModel.findOne({username: newUser.username}, (err, user) => {
			
			if(user) {
				reject('Username already exists')
			} else {
				UserModel.count({}, (err, num) => {
					newUser.id = num + 1;
					let mongoUser = new UserModel(newUser);
					mongoUser.save();
					resolve(newUser)
				})
				
			}
		})
	})
}

module.exports = {
	signup: signup
}