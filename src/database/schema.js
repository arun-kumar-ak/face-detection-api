const mongoose = require('mongoose');

const register = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true
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
