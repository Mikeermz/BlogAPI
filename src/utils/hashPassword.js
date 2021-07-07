const bcrypt = require('bcrypt');
const SALT_FACTOR = 10; // SALT ayuda a neerar un string de manera aleatoria.

/*
	Para entender el salt:
	Imagina que dos usuarios ocupan la misma contraseña "123". Sin un salt factor de por medio,
	el hash de encriptación que se generaría de ambas contraseñas sería el mismo.
	
	Así generamos hashes únicos.
	
	Te recomiendo buscar sobre "rainbow tables".
*/

module.exports = (password) => {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt( SALT_FACTOR, function(err, salt) {
			if(err) reject(err);
			bcrypt.hash(password, salt, function(err, hash) {
				if(err) reject(err);
				resolve(hash)
			})
		})
	})
}