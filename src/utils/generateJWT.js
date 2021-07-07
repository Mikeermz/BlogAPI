const JWT = require('jsonwebtoken');
const SECRET_KEY = 'misecreto';
// const SECRET_KEY = process.env.SECRET_KEY;

module.exports = ({id, email, gender}) => {
    const PAYLOAD = {
        id, email, gender
    };

    return JWT.sign(PAYLOAD, SECRET_KEY, { expiresIn: '24h'});
}