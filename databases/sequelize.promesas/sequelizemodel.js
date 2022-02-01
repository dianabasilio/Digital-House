const Sequelize = require('sequelize');
const sequelize = require('../database'); 

//La tabla usuarios tiene 3 columnas, nombre, email y password
const col = {
	nombre: Sequelize.STRING
	,
	email: Sequelize.STRING
	,
	password:Sequelize.STRING
	
}

//Guía: https://sequelize.org/v4/manual/tutorial/models-definition.html

//Define espera 2 parametros, El primer parámetro del método define es un string con el nombre de la tabla: 'usuarios'
//El segundo parámetro es un JSON con la configuración de las columnas.
const Usuario = sequelize.define('usuarios',col);

module.exports = Usuario;


//Segundo ejemplo

//debemos decirle explícitamente a Sequelize que no vamos a usar ninguna de las columnas created_at o updated_at. Para hacer 
//esto es necesario pasar, como tercer parámetro del método define, un JSON con esta estructura: {timestamps: false}

const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define('usuarios',{
    nombre: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
},{timestamps: false} ); //Agregá el tercer parámetro con la configuración

module.exports = Usuario;


'use strict';

module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('Product',  {
        id:  DataTypes.INTEGER
        ,
        nombre:DataTypes.STRING(200)
        ,
        descripcion:  DataTypes.TEXT
        ,
        precio: DataTypes.DECIMAL
        
    }, {timestamps: false, tableName: "productos"});
 	return product;
};