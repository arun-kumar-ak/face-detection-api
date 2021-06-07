const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors({
    origin: '*',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

require('./config/database');

app.use('/',require('./api-routes'));

app.listen(process.env.PORT, ()=> {
    console.log(`server working successfully on ${process.env.PORT}`);
})
