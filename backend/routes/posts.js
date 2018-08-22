var express = require('express');
var router = express.Router();
const config = require('../config/keys');


const Post = require('../models/posts');

router.get('/', function(req, res, next){
    // res.send('respond with a resource');
    res.send('post routing works');
  
});

// New post

router.post ('/new', function(req, res, next){
    let newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date
    });
     
    Post.addPost(newPost, (err, post) => {
        if(err){
            res.json({success: false, msg: 'Failled to post new'});
        } else {
            res.json({success: true, msg: 'Post created correctly'});
        }
    });
});

module.exports.getUserById = (id, callback) =>{
    Post.findById(id, callback)
}

module.exports.getPostByUsername = (username, callback) =>{
    const query = {username: username}
    Post.findOne(query, callback);
}

module.exports = router;