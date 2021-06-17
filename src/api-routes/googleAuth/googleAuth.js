const routes = require('express').Router();

const Schema = require('../../model/schema');
const session = require('../../middleware/session');

routes.post('/auth/google', session, async (req, res) => {
    const { email } = req.body;

    Schema.RegisterSchema.findOne({email: email}, (err, data) => {
        if(err) res.status(400).send({errorMsg: err})

        if(data === null) {
            req.session.destroy();
            res.status(200).send({passwordNeed: 'set password'})
        }else {
            if(!req.session.userID) {
                req.session.userID = data._id;
            }
            res.status(200).send({user: {
                username:data.username,
                email: data.email,
                picture: data.picture,
                faceDetect: data.faceDetect,
                joinedDate: data.joinedDate
            },successMsg: 'google login successfully'})
        }
    })

})

module.exports =routes;