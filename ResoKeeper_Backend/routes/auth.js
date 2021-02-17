const nJwt = require('njwt');
var webtoken = require('./../config/webtoken.js');

function jwtAuth(req, res, next) {
    if(!req.token) {
        return res.status(403).send({ auth: false, message: 'No token provided'});
    }
    nJwt.verify(req.token, webtoken.secret, function(err, decoded) { //webtoken.secret not working?
        if(err) {
            return res.status(500).send({ auth:false, message: "Couldnt autheticate token"});
        }
        req.userId = decoded.body.id;
        req.username = decoded.body.username;
        next();
    });
}

module.exports = jwtAuth;