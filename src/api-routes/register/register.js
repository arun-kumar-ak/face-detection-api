const routes = require('express').Router();
const bcrypt = require('bcrypt');

const Schema = require('../../model/schema');
const session = require('../../middleware/session');

routes.post('/register', session, (req, res) => {
    let user = req.body;
    Schema.SigninSchema.findOne({email: user.email}, (err,data) => {
        if(data === null) {
            const hash = bcrypt.hashSync(user.password, 10)
            let newUser = new Schema.SigninSchema({
                email: user.email,
                password: hash
            })

            newUser.save((err,data)=> {
                if(data !== null) {
                    let newUser = new Schema.RegisterSchema({
                        username: user.username,
                        email: user.email,
                        picture: user.picture,
                        joinedDate: new Date()
                    })

                    newUser.save((err,data) => {
                        if(data!== null) {
                            if(!req.session.userID) {
                                req.session.userID = data._id;
                            }
                            res.status(200).send({user: {
                                username:data.username,
                                email: data.email,
                                picture: data.picture,
                                faceDetect: data.faceDetect,
                                joinedDate: data.joinedDate
                            },successMsg: 'register successfully'})
                        }else {
                            res.status(400).send({ errorMsg: err });
                        }
                    })
                }else {
                    res.status(400).send({ errorMsg: err });
                }
            })
        }else {
            res.status(400).send({ errorMsg:'user already exists' });
        }
    })
});

module.exports = routes;