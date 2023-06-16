
/* File : comm--401-ass2, Student’s Name: Lujia(Nina) Sun, StudentID: 300726390, and Date June 16 2023*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
