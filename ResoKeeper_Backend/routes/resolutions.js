var express = require('express');
var router = express.Router();

const db=require('./../config/database.js');
const jwtAuth = require('./auth.js');

//GET LIST OF RESOLUTIONS
router.get('/', jwtAuth, function(req, res, next) {
  //username functionality
  let que='SELECT title FROM resolutions WHERE username=?;';
  db.query(que, req.username, function(err,result) {
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


//EDIT A ERSOLUTION
router.patch("/",function(req,res){
  let new_title = req.body.new_title;
  let title = req.body.title;
  let que = "UPDATE resolutions SET title=(?) WHERE title=(?);"
  db.query(que, [new_title,title], function(err,result) {
    if(err)
      throw err;
    else {
      console.log("UPDATED");
      res.json({});
    }
  });
});
module.exports = router;

