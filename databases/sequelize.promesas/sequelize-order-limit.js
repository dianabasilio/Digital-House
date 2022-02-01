const Producto = require('model/productos.js');

Producto.findAll({
	//Tu código aquí
	 order: [['precio', 'ASC']] 
}).then(productos => {
	console.log(productos)
});


//Limit
const Producto = require('model/productos.js');

Producto.findAll({
	//Tu código aquí
	//solo trae los primeros 5
	 limit: 5 
}).then(productos => {
	console.log(productos)
});