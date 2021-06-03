const routes = require('express').Router();

const Schema = require('../../model/schema');

routes.get('/authUser', (req, res, next) => {
    if(req.session.userID) {
        Schema.RegisterSchema.findOne({_id: req.session.userID}, (err,data) => { 
            if(data !== null) {
              if(req.session.visitCount) {
                req.session.visitCount = req.session.visitCount + 1;
              }else {
                req.session.visitCount =  1;
              }
              console.log(req.session);
              res.status(200).send({user: {
                username:data.username,
                email: data.email,
                picture: data.picture,
                joinedDate: data.joinedDate
              },successMsg: 'login successfully'})
            }else {
              res.status(400).send({ errorMsg: 'session not exists' });
            }
        })
    }else {
      res.status(200).send({nothing: true})
    }
})

module.exports = routes;