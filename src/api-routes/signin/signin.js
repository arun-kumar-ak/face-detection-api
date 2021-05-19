const routes = require('express').Router();

routes.post('/signin', (req, res) => {
  console.log(req.body)
  res.status(200).send({msg:'login successfully'});
});

module.exports = routes;