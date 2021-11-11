const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
    if(err) {
        console.log(err)
    }
});

mongoose.connection.on('connected',() => {console.log('db connected successfully')});
