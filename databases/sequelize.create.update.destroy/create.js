const Usuario = require('model/usuario.js');

Usuario.create(
    {
    nombre:"Diana",
    email:"dianabasilio99@hotmail.com",
    password: "hi"
    } 
)

//Ejemplo 2

//El método bulkCreate es como el método create, pero con la ventaja que permite insertar varios registros de una sola vez.
const Pelicula = require('model/pelicula.js');

Pelicula.bulkCreate(
    [
{titulo: "hi",  genero: "miedo"},
{titulo: "IT",  genero: "miedo"}

]
)

//Ejemplo 3

//Como parámetro del método debemos pasar un JSON 
//con los atributos nombre y precio. El valor para estos atributos los vamos a tener que recuperar a partir del request

const Producto = require('model/producto.js');

const productoController = {
  create: (req, res) => {
    // tu código acá
    Producto.create( {
       nombre: req.body.nombre,
      precio: req.body.precio
    }
     
    )
  }  
}

//Ejemplo 4

const db = require('../database/models');
 
const controller = {
  almacenarEnDB: (req, res) => 
  {
db.Product. create({
  nombre: req.body.nombreProducto,
  descripcion: req.body.descripcionProducto,
  precio: req.body.precioProducto
})

res.redirect("/productos")
  }
}
 
module.exports = controller;

//ejemplo 5
//En controller

//dentro del archivo de rutas productsRoutes.js deberemos crear esa ruta para que use el método almacenarEnDB.
// Tengamos presente que siempre que deseemos almacenar información en la base de datos deberemos hacer que la información viaje por POST
const express = require('express');
const router = express.Router();
 
const productsController = require('../controllers/productsController');
 
router.get('/', productsController.index);

router.post("/",  productsController.almacenarEnDB)
 
module.exports = router;