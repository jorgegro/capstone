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
    }
})

const Post = module.exports = mongoose.model('Post', PostSchema);

