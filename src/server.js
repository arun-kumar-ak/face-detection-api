const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// app.use(session({
//     genid: (req) => {
//         return uuidv4()
//     },
//     secret: 'dark magician',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: false,
//         maxAge: 1000*60*60*1,
//         sameSite: 'none',
//         httpOnly: false
//     },
//     store: MongoStore.create({
//         mongoUrl: mongoURL,
//         collectionName: 'session',
//         ttl: 1000*60*60*1
//     })
// }))

require('./config/database');

app.use('/',require('./api-routes'));

app.listen(process.env.PORT, ()=> {
    console.log(`server working successfully on ${process.env.PORT}`);
})
