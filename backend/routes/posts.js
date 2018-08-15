var express = require('express');
var router = express.Router();
const config = require('../config/keys');


const Posts = require('../models/posts');

router.get('/', function(req, res, next){
    // res.send('respond with a resource');
    res.send('post routing works');
  
});

// New post

router.post ('/new')
  module.exports = router;