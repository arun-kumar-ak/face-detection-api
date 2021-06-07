const express = require('express');
const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();
const app = express();
app.use(cors({
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

require('./config/database');
//require('./api-routes')
app.use('/',require('./api-routes/index'));

const PORT = process.env.PORT || 3002;
app.listen(PORT, ()=> {
    console.log(`server working successfully on ${PORT}`);
})
