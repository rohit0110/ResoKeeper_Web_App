var express = require('express');
var router = express.Router();

const db=require('./../config/database.js');

//GET LIST OF RESOLUTIONS
router.get('/', function(req, res, next) {
  //username fucntionality
  let que='SELECT title FROM resolutions WHERE username="Sicarus";';
  db.query(que, function(err,result) {
    if(err)
      throw err;
    else{
      console.log(result);
      res.send(result);
    }
  });
});

//CREATE A RESOLUTION
router.post('/create', function(req, res){
  let title=req.body.title;
  let username=req.body.username;
  let type=req.body.type;
  let pro_goal=req.body.pro_goal;
  let cal_goal=req.body.cal_goal;
  let que = `INSERT INTO resolutions (title,username,type,pro_goal,cal_goal) VALUES (?,?,?,?,?);`;
  db.query(que, [title,username,type,pro_goal,cal_goal], function(err,result) {
      if(err)
        throw err;
      else{
        console.log("INSERTED RESOLUTION");
        res.json({});
      }
  });
});

module.exports = router;
//authentication
//https://medium.com/quick-code/handling-authentication-and-authorization-with-node-7f9548fedde8
