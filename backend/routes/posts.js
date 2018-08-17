var express = require('express');
var router = express.Router();
const config = require('../config/keys');


const Posts = require('../models/posts');

router.get('/', function(req, res, next){
    // res.send('respond with a resource');
    res.send('post routing works');
  
});

// New post

router.post ('/new', function(req, res, next){
    let newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time
    })
});
  module.exports = router;