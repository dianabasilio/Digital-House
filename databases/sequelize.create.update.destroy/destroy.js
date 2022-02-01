const Pelicula = require('model/pelicula.js');

Pelicula.destroy(
    {where:  {id: 3}}
)

//Ejemplo 2
const Usuario = require('model/usuario.js');


Usuario.destroy(({where: {email: "kenny@south-park.com"}}))

//Ejemplo 3

// vamos a eliminar a todos los usuarios cuyo proveedor de correo sea aol.com.
// Es decir, aquellos cuyo email termine en @aol.com.
const Sequelize = require('sequelize');
const Usuario = require('model/usuario.js');
const Op = Sequelize.Op;

Usuario.destroy( {where: { email: { [Op.like]: '%aol.com'}}})

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
     db.Product
        .update(
		 {
              nombre: req.body.nombreEditado,
              precio: req.body.precioEditado,
              descripcion: req.body.descripcionEditada
            },
           {
              where: { id: req.params.id }
           }
        )
        .then(() => {
           res.redirect('/productos');
        })
  },
  borrarRegistro: (req, res) => {
     db.Product.destroy(
        {
           where: {
              id: req.params.id
           }
        }
     )
     .then(() => {
           res.redirect('/productos');
        })
  },
}
 
module.exports = controller;