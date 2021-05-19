const mongoose = require('mongoose');

const mongoURL = require('../config');

mongoose.connect(mongoURL+'/test',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
    if(err) {
        console.log(err)
    }
})
// const db = mongoose.connection;

// db.on('connected',() => {console.log('db connected successfully')})
