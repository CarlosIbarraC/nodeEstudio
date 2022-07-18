const express = require('express')
const router = express.Router();
router.get('/',(req,res)=>{
    
    res.render("index",{titulo:"Mi titulo Dinamico"})
    
})

router.get('/servicios',(req,res)=>{
    res.render("servicios",{tituloServicios:"este es un mensaje de servicios"})
})


module.exports= router