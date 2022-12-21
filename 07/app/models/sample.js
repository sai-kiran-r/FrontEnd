//creating a schema for user ID and password

const mongoose = require('mongoose');

module.exports = mongoose.model('schema', {
    email : {type:  String, default: ''},
    password : {type: String, default: ''}
})