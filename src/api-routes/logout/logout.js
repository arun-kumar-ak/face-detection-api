const routes = require('express').Router();

routes.get('/logout', (req,res)=> {
    req.session.destroy()
    res.status(200).send({successMsg: 'logout successfully'});
})

module.exports =routes;