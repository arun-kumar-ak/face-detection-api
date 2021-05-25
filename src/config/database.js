const mongoose = require('mongoose');

const mongoURL = require('../config');

mongoose.connect(mongoURL,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
    if(err) {
        console.log(err)
    }
});

mongoose.connection.on('connected',() => {console.log('db connected successfully')});
