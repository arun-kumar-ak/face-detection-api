const mongoose = require('mongoose');

const register = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String,
        default: ''
    },
    joinedDate: Date
},{collection: 'register'});

const signin = new mongoose.Schema({
    email: String,
    password: String
},{collection: 'signin'})

module.exports = {
    RegisterSchema: mongoose.model('register',register),
    SigninSchema : mongoose.model('signin',signin)
};
