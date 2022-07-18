const express = require('express')
const router = express.Router();
const Establo = require('../models/establos')

router.get('/',async(req, res)=>{
    try {
        const arrayEstabloDB = await Establo.find()

        console.log(arrayEstabloDB)
        res.render("establos",{
            arrayEstablos:arrayEstabloDB
        })
    } catch (error) {
        console.log(error);
    }
   
})

module.exports= router