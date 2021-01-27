var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([{title: "WORKOUT GANG"}]);
});

module.exports = router;