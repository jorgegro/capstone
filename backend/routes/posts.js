var express = require('express');
var router = express.Router();
const passport = require ('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/keys');


const Post = require('../models/posts');

router.get('/', function(req, res, next){
    return Post.find().then(posts => {
        res.send(posts);
    });
});

router.get('/:id', function(req, res){
    // 08/20/2018
    return Post.find({
        date: req.param.id
    }.then(posts => {
        res.send(posts);
    }));
});

// New post

router.post ('/new', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
    //what PASSPORT.authenticate does, is that it attaches the authenticated user to the req objet
    //so, you can see it from here: req.user
    let newPost = new Post({
        
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    date: req.body.date,
    time: req.body.time,
    userId: req.user._id

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