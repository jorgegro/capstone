const mongoose = require('mongoose');
const config = require('../config/keys');
// var fs = require(‘fs’);

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
    pic: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true,
    },
    time: {
        type: String,
        require: true
    },
    postPic: { 
        data: Buffer,
        contentType: String 
    }
})

const Post = module.exports = mongoose.model('Post', PostSchema);

