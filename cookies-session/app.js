const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({secret: "frase secreta"}));

const cambiarIdioma = (req, res) => {
	// Escribir tu código aquí
	req.session.idioma= (req.query.idioma);

	res.redirect('/');
}

const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({secret: "frase secreta"}));

const admin = (req, res) => {
    if(!req.session.admin){
        res.redirect('/login')
    }
}

//Para eso, dentro del controlador, vamos a usar el método cookie del objeto response. Este método espera, 
//como primer parámetro, el nombre de la cookie,
// en este caso "ultimoAcceso". El segundo parámetro va a ser la fecha de acceso, esto lo podemos obtener haciendo new Date().

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index= (req, res) => {
	//Escribí tu código acá
	res.cookie('ultimoAcceso', new Date());

	//Código del controlador
	const cambiarIdioma = (req, res) => {
	// Escribir tu código aquí
	req.session.idioma= (req.query.idioma);

	res.redirect('/');
}
}