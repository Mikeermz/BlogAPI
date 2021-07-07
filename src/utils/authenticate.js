const bcrypt = require('bcrypt');
const User = require('../models/users');

module.exports = ({email, password}) => {
	return new Promise((resolve, reject) => {
		const user = new User;
		user.findByParams('email', email)
			.then((result) => {
				const [userFound] = result;
				if (!userFound) reject(new Error('el usuario no existe'));
				bcrypt.compare(password, userFound.password, function(err, same){
					if(!same) reject(new Error('El password es incorrecto'));

					resolve({same, userFound});
					// same ? resolve({same, userFound}) : reject(new Error('El password es incorrecto'))
				})
			}).catch((error) => {
				reject(error);
			})
	})
}