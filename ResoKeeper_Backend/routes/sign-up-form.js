var express = require('express');
var router = express.Router();

const db=require('./../config/database.js');

router.post('/',function(req,res){
    console.log(req.body);
    let name=req.body.name;
    let username=req.body.username;
    let email=req.body.email;
    let password=req.body.password;
    let que= `INSERT INTO users (name,email,username,password) VALUES (?,?,?,?)`;;
    db.query(que,[name,email,username,password],function(err,result) {
        if(err)
            throw err;
        else{
            console.log("INSERTED RECORD");
            res.json({});
        } 
     });
});

module.exports = router;