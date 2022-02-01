const db = require('../database/models');

let usuarios = [];

db.Usuario.findAll()
.then((respuesta) => {
usuarios=  respuesta;
});

//Ejemplo con find pk

const db = require('../database/models');

let controller = {
    profile: (req, res) => {
        db.Usuario.findByPk(req.params.id).then((resultado) => {
            console.log(resultado);
        })
    }
}

//Ejemplo findbyone donde le puedes poner condiciones

const db = require('../database/models');

db.Usuario.findOne({
    where: {
 nombre: 'John'
 }} ).then((resultado) => {
   
 console.log(resultado);
 });

 //otro
 const db = require('../database/models');
 
const controller = {
  index: (req, res) => {
     return res.send('Listado de productos');
  }
}
 
module.exports = controller;

//otro ejemplo
const db = require('../database/models');
 
const controller = {
  index: (req, res) => {
     db.Product
        .findAll()
        .then(products => {
           return res.send(products);
        })
        .catch(err => {
           return res.send(err)
        })
  },
  porId: (req, res) => {
    db.Product.findByPk(req.params.id)
    .then(function(producto){
      res.send(producto)

    })
    .catch(error => console.log(error));
  }
}