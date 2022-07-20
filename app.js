const express=require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT||3000
//conexion a base de datos
const mongoose = require('mongoose')
const user = process.env.USSER
const password = process.env.PASS
const dbname = process.env.DBNAME
const uri = `mongodb+srv://${user}:${password}@cluster0.qb3hlej.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri,
       {useNewUrlParser:true,useUnifiedTopology:true}
)
     .then(()=>console.log("base de datos conectada"))
     .catch(e=>console.log(e))


//motor de plantillas para ejs
app.set('view engine','ejs')
app.set('views',__dirname +'/views')

app.use(express.static(__dirname+"/public"))
app.use((req, res, next) => {
    console.log('Time: %d', Date.now())
    next()
  })
app.use('/',require('./routers/rutasWeb') )
app.use('/mascotas',require('./routers/Mascotas') )
app.use('/establos',require('./routers/establos') )
app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo:"pagina 404",
        parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, itaque? Odit deleniti quo officia dolorem adipisci dicta. Id, eos illum.",
       
    })
})

app.listen(port,()=>console.log('enviado por puerto:',port))

