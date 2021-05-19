const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).send('its working successfully');
});

routes.use(require('./signin/signin'));
routes.use(require('./register/register'));

module.exports = routes;