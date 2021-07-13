const JWT = require('jsonwebtoken');
const { SECRET_KEY } = require('../constants/config')

module.exports = ({id, email, gender}) => {
    const PAYLOAD = {
        id, email, gender
    };

    return JWT.sign(PAYLOAD, SECRET_KEY, { expiresIn: '24h'});
}