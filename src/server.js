const express = require('express');
const cors = require('cors');

const app = express();

const origins = ["https://arun-kumar-ak.github.io","http://localhost:3000","http://192.168.56.1:3000","http://10.0.2.15:3000"];

app.use(cors({
    origin: (origin, callback) => {
        console.log(origin)
        if(origins.indexOf(origin) !== -1) {
            console.log("accepted")
            callback(null, true);
        }
    },
    // origin: origins,
    credentials: true,
    optionsSuccessStatus: 200,
}));
// app.use(function(req, res, next) {
//     // res.header("Access-Control-Allow-Origin", "http://192.168.56.1:3000");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });
app.use(express.json());
app.use(express.urlencoded({extended: true}))

if(app.get('env') !== 'development') {
    app.set('trust proxy', 1)
}

if(app.get('env') === 'development') {
    require('dotenv').config();
}

require('./config/database');

app.use('/',require('./api-routes/index'));

const PORT = process.env.PORT || 3002;
app.listen(PORT, ()=> {
    console.log(`server working successfully on http://localhost:${PORT}`);
})