const routes = require('express').Router();
const bcrypt = require('bcrypt');

const Schema = require('../../database/schema');

routes.post('/register', (req, res) => {
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
                        joinedDate: new Date()
                    })

                    newUser.save((err,data) => {
                        if(data!== null) {
                            res.status(200).send({data: {
                                username:data.username,
                                email: data.email,
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