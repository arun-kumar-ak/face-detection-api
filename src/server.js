const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//database triggered
require('./database/database');

app.use('/',require('./api-routes'));

app.listen(3002, ()=> {
    console.log('server working successfully');
})