const mongoose = require('mongoose');
const config = require('../config/keys');

//Post Schema

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
     location:{
        type: String,
        require: true
     },   
    
    date: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    userId:{
        type: String,
        require: true
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getUserById = (id, callback) =>{
    User.findById(id, callback)
}

module.exports.getUserByUsername = (username, callback) =>{
    const query = {username: username}
    User.findOne(query, callback);
}

module.exports.addPost = (newPost, callback) => {
    newPost.save(callback);
}
