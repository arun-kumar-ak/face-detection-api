const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const MongoStore = require('connect-mongo');

const mongoURL = require('../config');

module.exports = session({
    genid: (req) => {
        return uuidv4()
    },
    secret: 'dark magician',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: 1000*60*60*1,
        sameSite: 'strict',
        httpOnly: false
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URL,
        collectionName: 'session',
        ttl: 1000*60*60*1
    })
})