//el foreignKey va a ser la columna llamada "genero_id" y vamos a indicar como alias "genero".
//Belongs to: a  uno le pertenece 1

const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Genero = require('model/genero.js');

const Pelicula = sequelize.define('peliculas',{
    titulo: Sequelize.STRING,
    genero_id: Sequelize.INTEGER,
});

// tu código aquí
Pelicula.belongsTo(Genero, {foreignKey: "genero_id", as: "genero"})

module.exports = Pelicula;

//Ejemplo 2
//De uno a muchos
//Has many a uno le pertenecen muchos

const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Pelicula = require('model/pelicula.js');

const Genero = sequelize.define('generos',{
    nombre: Sequelize.STRING,
});

// tu código aquí
Genero.hasMany(Pelicula, {foreignKey: "genero_id", as: "pelicula"})

module.exports = Genero;

//Ejemplo 3
//En controller
const Pelicula = require('model/pelicula.js');

// tu código aquí
Pelicula.findByPk(1,

 {include: ['genero']}

)

.then(pelicula => console.log(pelicula.genero.nombre))

//Ejemplo 4
//En este caso tenemos un modelo Producto que le pertenece a un usuario (el creador).
//Nuestro objetivo va a ser crear un producto cuyo nombre sea "Falcon 9" 
//y crear en el mismo método un usuario asociado a ese producto que tenga como nombre "Elon" y como apellido "Musk".

const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define('usuarios',{
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
});

const Producto = sequelize.define('productos',{
    nombre: Sequelize.STRING,
    usuario_id: Sequelize.INTEGER,
});

const Creador = Producto.belongsTo(Usuario, { as: 'creador' });

// tu código aquí
Producto.create({nombre: 'Falcon 9', creador: {nombre: 'Elon',apellido: 'Musk'}},
 {include: [Creador]},
 )