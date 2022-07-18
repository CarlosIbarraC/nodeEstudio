const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const establoSchema = new Schema({
nombre:String,
descripcion:String,
rango:String

})

//crear modelo
const Establo = mongoose.model('Establo',establoSchema)
module.exports=Establo