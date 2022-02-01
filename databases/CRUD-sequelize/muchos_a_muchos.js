//queremos relacionar los modelos pelicula y actor. Para ello, vamos a crear el modelo PeliculaActor.
//Como en la creación de todo modelo, el primer parámetro es el nombre de la tabla, en este caso: "pelicula_actor". 
//Como segundo parámetro pasamos 
//las columnas y sus propiedades. Al ser la representación de una tabla pivot va a tener dos columnas "pelicula_id" y "actor_id".

const Sequelize = require('sequelize');
const sequelize = require('../database'); 

// tu código aquí

const PeliculaActor = sequelize.define("pelicula_actor",{
    pelicula_id: {
        type: Sequelize.INTEGER,
        references:{model: "Pelicula", key: "id"}
        
    }
    , actor_id: {
        type: Sequelize.INTEGER,

        references:{model: "Actor", key: "id"}
    }
}
)
module.exports = PeliculaActor;

//Ejempplo2
//necesitaríamos agregar un belongsTo con Pelicula y otro con Actor. Como en todos los belongsTo, el primer 
//parámetro va a ser el nombre del modelo y el segundo, un JSON indicando el foreignKey (no es necesario configurar el "as")
const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Actor = require('model/actor.js');
const Pelicula = require('model/pelicula.js');

const PeliculaActor = sequelize.define('pelicula_actor',{
    pelicula_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Pelicula',
    		key: 'id'
    	}
    },
    actor_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Actor',
    		key: 'id'
    	}
    }
});

PeliculaActor.belongsTo(Pelicula, {foreignKey: "pelicula_id"})

PeliculaActor.belongsTo(Actor, {foreignKey: "actor_id"})

module.exports = PeliculaActor;

//Ejemplo 3
//El objetivo de este ejercicio es relacionar el modelo Pelicula con Actor a través de una relación de muchos a muchos.

//Para indicar esto, vamos a emplear el método belongsToMany del modelo Pelicula
const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Actor = require('model/actor.js');

const Pelicula = sequelize.define('peliculas',{
  titulo: Sequelize.STRING,
  genero_id: Sequelize.INTEGER,
});

// tu código aquí
 Pelicula.belongsToMany(Actor,
  {
    foreignKey: "pelicula_id", as: "actores", through: "PeliculaActor"})


module.exports = Pelicula;