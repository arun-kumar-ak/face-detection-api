const routes = require('express').Router();
const passport = require('passport');

const Schema = require('../../model/schema');

routes.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] })
);

routes.get('/auth/google/callback', 
  passport.authenticate('google'),
    (req, res) => {
      let user = req.user._json;
      Schema.RegisterSchema.findOne({email: user.email}, (err,data) => {
        if(data === null) {
          res.status(200).send({
            data: {
              username:user.name,
              email: user.email,
            },
            passwordNeed: true
          })
        }else {
          if(user.email_verified) {
            res.status(200).send({data: {
              username:data.username,
              email: data.email,
              picture: data.picture,
              joinedDate: data.joinedDate
            },successMsg: 'login successfully'})
          }else {
            res.status(401).send({errorMsg: 'unable to signin'})
          }
        }
      })
    }
);

module.exports = routes;