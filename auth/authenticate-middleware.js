const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secret');

module.exports = (req, res, next ) => {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({message: 'Error in token'})
            } else {
                req.user = { department: decodedToken.department}
                next();
            }
        })
    } else {
        res.status(401).json({message: 'No token? You shall not pass!'})
    }
}