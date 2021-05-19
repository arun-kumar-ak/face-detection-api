const routes = require('express').Router();

routes.post('/register', (req, res) => {
    console.log(req.body);
    res.status(200).send({msg: 'register successfully'});
});

module.exports = routes;