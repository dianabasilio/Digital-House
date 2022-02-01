buscarProducto(1)

.then(producto => {
    console.log(producto);
})

 .catch(error => console.log(error));


const db = require('../database/models');
 
const controller = {
  index: (req, res) => {
     db.Product.findAll({
})
.then(resultados=>{
 res.send(resultados);
 })

 .catch(error => console.log(error));
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