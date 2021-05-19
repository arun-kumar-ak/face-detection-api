const mongoose = require('mongoose');

const mongoURL = require('../config');

mongoose.connect(mongoURL+'/test',{ useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;

db.on('connected',() => {console.log('db connected successfully')})

// const SampleSchema = require('./schema');

// const sample = async () => {
//     const sam = await SampleSchema.find({})
//     console.log(sam)
// }

// sample();