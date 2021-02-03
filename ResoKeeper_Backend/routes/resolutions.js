var express = require('express');
var router = express.Router();

/* GET ALL Resolutions. */
router.get('/', function(req, res, next) {
  res.json([{title: "qwerty@praecep"}]);
});

router.post('/', function(req, res){
  res.send("Create Resolution");
});

module.exports = router;

//authentication
//https://medium.com/quick-code/handling-authentication-and-authorization-with-node-7f9548fedde8
