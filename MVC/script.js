//PRIMER CONTROLLER

let carritoController = {
    sacarItem: function(){},
    consultarItem: function(){},
    agregarItem: function(req,res){res.send('Item Agregado');
 }
 };
 module.exports = carritoController
 
//RUTEANDO CONTROLLERS

let express = require('express')
let router = express.Router();
let carritoController = require('../controllers/carritoController')

router.get('/:item', carritoController.agregarItem)
module.exports = router

//Tenemos una lista de muchas series almacenadas en la variable series. 
//Nuestro trabajo será crear una ruta que apunte a "/series" y las devuelva a TODAS.
const express = require('express');
const app = express();

app.get('/series', function (req,res) {

 res.send( series)
})

//Buscar una serie
const express = require('express');
const app = express();

app.get('/serie/:id', function (req,res) {
   
     const {id} = req.params
     const serieBuscada = series.find(s=>{
         return s.id === Number.parseInt(id)
     })

     if (serieBuscada){
         res.send(serieBuscada)
     }else{
         res.end();
     }
    

})


//Rutear

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
});
router.get('/:genero', (req,res) => {
});
router.get('/crear', (req,res) => {
});

module.exports= router


const express = require('express');
const app = express();

const rutasSeries = require('./routes/series');

app.use("/series",  rutasSeries)


//ultimo
const express =require('express');

const router =express.Router();