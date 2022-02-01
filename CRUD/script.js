// Acá nos falta express y el router
const express = require('express');
const router=express.Router();

router.get('/peliculas', function (req , res) {
 res.send('Listado de películas');
})

//2
const express = require('express');
const router = express.Router();

router.get('/productos', function (req , res) {
    let respuesta = req.query;
 res.send(respuesta);
})

//
const express = require('express');
const router = express.Router();

const celulares = [
    {
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];

router.get('/celulares', function (req , res) {
    let respuesta = req.query;
    if (celulares.filter(respuesta => respuesta.precio > max )){
        res.send(respuesta);
    }

})


//Ya teniendo creada la constante app, debemos usarla para
// agregar la configuración necesaria (urlenconded y json) para trabajar con POST
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

express.json()

//Vamos a crear una ruta del tipo POST llamada "/ver-body", en donde, a través 
//del método send, mostremos en el navegador el contenido del atributo body
const express = require('express');
const router=express.Router();

router.post('/ver-body', function (req , res) {
        res.send(req.body);

});

//Luego, vamos a recuperar esos datos a partir del atributo
// body del request y se los vamos a asignar a nuestro objeto producto
const express = require('express');
const router = express.Router();

let producto = {
    nombre: null,
    precio: null
};


router.post('/crear/producto', function (req , res) {
        res.send(producto = {
            nombre: req.body.nombre, precio: req.body.precio} );
       
});

//

const express = require('express');
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method')); 

//PUT
<html>
  <head>
    <title>Formulario de registro</title>
  </head>
  <body>
    <form action="usuarios/actualizar?_method=PUT" method="POST">

    </form>
  </body>
</html>

//editarpelicula con id
let peliculas = [
    {
        id: 1,
        titulo: 'Spider-Man: Lejos de casa',
        duracion: 129,
        genero: 'Aventura'
    },
    {
        id: 2,
        titulo: 'Toy Story 4',
        duracion: 100,
        genero: 'Animación'
    },
    {
        id: 3,
        titulo: 'X-Men: Fénix Oscura',
        duracion: 113,
        genero: 'Acción'
    }
];

const express = require('express');
const router = express.Router();

router.put('/pelicula/:id',(req, res)=>{
     peliculas.forEach(pelicula =>{
         if(req.params.id == pelicula.id){
            pelicula.titulo = req.body.titulo;
             pelicula.genero = req.body.genero;
             pelicula.duracion = req.body.duracion;
         }
     });
 }); 

 //filter ejemplo
 const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

let celulares = [
    {
        id: 1,
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        id: 2,
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        id: 3,
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        id: 4,
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];

const express = require('express');
const router = express.Router();

router.delete('/celular/:id',(req, res)=>{
    celulares = celulares.filter(celular=>req.params.id != celular.id);
    res.send({celulares:celulares});
});