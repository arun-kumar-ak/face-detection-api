const routes = require('express').Router();

routes.get('/', (req, res, next) => {
  res.status(200).send('');
});

routes.use(require('./signin/signin'));
routes.use(require('./register/register'));
routes.use(require('./authUser/authUser'));
routes.use(require('./faceDetect/faceDetect'));
routes.use(require('./logout/logout'));

module.exports = routes;