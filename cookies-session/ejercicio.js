const listadoProductos = {
	vestidoss: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	remeras: [
		'remera alforzas',
		'remera bordada',
		'musculosa',
	]
}
vestidos= "vestidos"
console.log(listadoProductos[vestidos]);

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const listadoProductos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	remeras: [
		'remera alforzas',
		'remera bordada',
		'musculosa',
	]
}

const recomendados = (req, res) => {
	//Tu código acá
	const preferencias= req.cookies.preferencias;
	const productos= listadoProductos[preferencias];
	res.render('/recomendados', {productos: productos});
}