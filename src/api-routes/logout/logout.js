const routes = require('express').Router();

const session = require('../../middleware/session');

routes.get('/logout', session, (req,res)=> {
    req.session.destroy()
    res.status(200).send({successMsg: 'logout successfully'});
})

module.exports =routes;