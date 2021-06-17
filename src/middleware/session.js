const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const MongoStore = require('connect-mongo');

var cookieOption = {}

if(process.env.NODE_ENV === 'development') {
    cookieOption = {
        maxAge: 1000*60*60*1,
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    }
}else {
    cookieOption = {
        maxAge: 1000*60*60*1,
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    }
}

module.exports = session({
    genid: (req) => {
        return uuidv4()
    },
    secret: 'dark magician',
    resave: false,
    saveUninitialized: true,
    cookie: cookieOption,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URL,
        collectionName: 'session',
        ttl: 1000*60*60*1
    })
})