const routes = require('express').Router();
const bcrypt = require('bcrypt');

const Schema = require('../../model/schema');

routes.post('/signin', (req, res, next) => {
  let user = req.body;
  Schema.SigninSchema.findOne({email: user.email}, (err,data)=> {
    if(bcrypt.compareSync(user.password, data.password)) {
      Schema.RegisterSchema.findOne({email: user.email}, (err,data) => {
        if(data !== null) {
          if(req.session.visitCount) {
            req.session.visitCount = req.session.visitCount + 1;
          }else {
            req.session.visitCount =  1;
          }
          res.status(200).send({data: {
            username:data.username,
            email: data.email,
            picture: data.picture,
            joinedDate: data.joinedDate
          },successMsg: 'login successfully'})
        }else {
          res.status(400).send({ errorMsg: err });
        }
      })
    }else {
      if(data === null) {
        res.status(400).send({errorMsg: 'Incorrect email id'})
      }else {
        res.status(400).send({errorMsg: 'Incorrect password'})
      }
    }
  })
});

module.exports = routes;