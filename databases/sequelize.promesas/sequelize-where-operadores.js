const Peliculas = require('model/peliculas.js');
Peliculas.findAll({
}).then(resultados=>{
 console.log(resultados);
 })