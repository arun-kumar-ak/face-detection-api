const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: ['http://localhost:3000/','http://localhost:3000/authUser','http://localhost:3000/signin','http://localhost:3000/register','http://localhost:3000/face-detect','http://localhost:3000/logout'],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

require('./config/database');

app.use('/',require('./api-routes/index'));

const PORT = process.env.PORT || 3002;
app.listen(PORT, ()=> {
    console.log(`server working successfully on ${PORT}`);
})
// "dotenv": "^8.2.0",