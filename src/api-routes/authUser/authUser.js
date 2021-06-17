const routes = require('express').Router();

const Schema = require('../../model/schema');
const session = require('../../middleware/session');

routes.get('/authUser', session, (req, res, next) => {
    if(req.session.userID) {
        Schema.RegisterSchema.findOne({_id: req.session.userID}, (err,data) => { 
            if(data !== null) {
              res.status(200).send({user: {
                username:data.username,
                email: data.email,
                picture: data.picture,
                faceDetect: data.faceDetect,
                joinedDate: data.joinedDate
              },successMsg: 'login successfully'})
            }else {
              res.status(400).send({ errorMsg: 'session not exists' });
            }
        })
    }else {
      req.session.destroy()
      res.status(200).send({nothing: true})
    }
})

module.exports = routes;