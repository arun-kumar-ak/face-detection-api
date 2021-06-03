const routes = require('express').Router();
const Clarifai = require('clarifai');

routes.get('/face-detect', (req, res) => {  
    const imgResponse = (boxData) => {
        res.status(200).send({boxData: boxData})
    }

    const app = new Clarifai.App({
        apiKey: process.env.CLARIFAI_API_KEY
    });

    app.models
        .predict(Clarifai.FACE_DETECT_MODEL , req.query.url)
        .then((msg) => {
            let boxData =[]
            msg.outputs[0].data.regions.map((data) => boxData.push(data.region_info.bounding_box))
            imgResponse(boxData)
        })
        .catch((err)=> console.log(err))
})

module.exports = routes;

// https://i2.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/girls-photo.jpeg?w=900

// https://st2.depositphotos.com/1017986/6159/i/950/depositphotos_61594591-stock-photo-happy-couple-in-shades-over.jpg