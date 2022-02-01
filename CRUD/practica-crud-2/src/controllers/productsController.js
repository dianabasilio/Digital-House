const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {
			products,
			toThousand
		})
	},


	// Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id;
		let product = products.find(product=> product.id == id)
		res.render('detail',{
			product,
			toThousand
		});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	// Create -  Method to store
	store: (req, res) => {
		let image
		//req.file marca undefined si no se lleno algún dato, image por ejemplo, o name
		//console.log(req.file); 
		//console.log(...req.body); 


		//Detecta cuando sí se subió la imagen
		//req.file es undefined si le faltoo poner la imagen o algún otro como nombre
		if (req.file){

			image = req.file[0].filename
		} else{
			//Se le pone la imagen default si falta
			image = 'default-image.png'
		}

		//Crea el objeto literal directamente tomando los valores que se le metieron con req.body
		let newProduct = {
			...req.body,
			//Toma la variable image que se definió arriba
			image: image,
			//Le agrega un id siguinete, tomando el último id y sumandole a este 1
			id: products[products.length - 1].id + 1
		};
		
		//le damos push para agregar el úlitmo producto que acabamos de agregar
		products.push(newProduct);

		//Aquí actualiza
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		//La vista a la que llevará cuando se mande
		res.redirect('/products');
		
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('product-edit-form', {productToEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
		let image

		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = productToEdit.image
		}

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			 if(req.params.id == pelicula.id){
            pelicula.titulo = req.body.titulo;
             pelicula.genero = req.body.genero;
             pelicula.duracion = req.body.duracion;
         }
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id
		const productoAEliminar = products.findIndex(producto => id == producto.id)
		if(productoAEliminar >= 0)
		{
			products.splice(productoAEliminar, 1)
			fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2),'utf-8')
			res.redirect('/products')
		} else
			res.redirect('/products')
	}

};

module.exports = controller;