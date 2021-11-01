const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: ["https://arun-kumar-ak.github.io","http://localhost:3000"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

if(app.get('env') !== 'development') {
    app.set('trust proxy', 1)
}

if(app.get('env') === 'development') {
    require('dotenv').config();
}

require('./config/database');

app.use('/',(req,res,next) => { res.setHeader('Access-Control-Allow-Origin',"*"); next(); },require('./api-routes/index'));

const PORT = process.env.PORT || 3002;
app.listen(PORT, ()=> {
    console.log(`server working successfully on ${PORT}`);
})