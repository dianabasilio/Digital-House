const Producto = require('model/producto.js');

 Producto.update({precio: 1234}, {where: {id: 1}})

//ejemplo 2
const Serie = require('model/serie.js');

Serie.update({genero: "sitcom"},{where: {genero: "comedia" }})

//Ejemplo 3

const Usuario = require('model/usuario.js');

Usuario.upsert({edad: 5 ,email: "dianan"})

//Ejemplo 4
const db = require('../database/models');
 
const controller = {
  almacenarEnDB: (req, res) => {
     db.Product
        .create({
           nombre: req.body.nombreProducto,
           precio: req.body.precioProducto,
           descripcion: req.body.descripcionProducto
        })
        .then(producto => {
           res.redirect('/productos');
        })
  },
  editarRegistro: (req, res) => {
     db.Product.update({nombre: req.body.nombreEditado, 
     precio: req.body.precioEditado, 
     descripcion:req.body.descripcion },
   {
      where: 
      {id: req.params.id}
   })
   res.redirect("/productos")
  },
}
 
module.exports = controller;
