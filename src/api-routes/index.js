const routes = require('express').Router();

routes.get('/', (req, res) => {
  req.session.username = "Arun Kumar";
  if(req.session.count) {
    req.session.count = req.session.count +1;
  }else {
    req.session.count =1;
  }
  res.status(200).send(`<h1>${req.session.username} you visited ${req.session.count} times</h1>`);
});

routes.use(require('./signin/signin'));
routes.use(require('./register/register'));
routes.use(require('./google-oauth/oauth'));

module.exports = routes;