var express = require('express');
var router = express.Router();
var nJwt = require('njwt');
var webtoken = require('./../config/webtoken.js');
const db=require('./../config/database.js');
const jwtAuth = require('./auth.js');

//Create token
router.post('/', function(req,res) {
    let username = req.body.username;
    let password = req.body.password;
    let que='SELECT id, username, password FROM users WHERE username=?;';
    db.query(que,[username], function(err, user){
        if(err) return res.status(500).send({status: 'Server error', err:err});
        if(!user) return res.status(404).send('User not found');
        if(password !== user[0].password) {
            return res.status(401).send({ auth: false, token: null});
        }
        var jwt = nJwt.create({ id: user[0].id, username: user[0].username }, webtoken.secret); //FIX THIS
        jwt.setExpiration(new Date().getTime() + (24*60*60*1000));
        res.status(200).send({ auth: true, token: jwt.compact() });
    });
});


//Authenticate token
router.get('/', jwtAuth,function(req,res,next){
    let que='SELECT id,username FROM users WHERE id=?;'; 
    db.query(que,req.userId, function (err,user) {
        if (err) {
            return res.status(500).send("There was a problem finding the user.");
          }
          if (!user) {
            return res.status(404).send("No user found.");
          }
          res.status(200).send(user[0]); 
    });
});

module.exports = router;
