const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
 
const upload = multer({ storage: storage });

router.post('/subir-archivo',upload.any(), fileController.upload); //Agregar el middleware de multer


const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const estadisticasController = require('../controllers/estadisticasController');

//Creá tu función visitasMiddleware
const visitasMiddleware = (req, res, next) => { //tu código acá
//aquí contará las vistas que se hicieron
estadisticasController.contarVisita(req);
next();
 }

router.get('/home', homeController.index); //Agregá la función visitasMiddleware como segundo parámetro de tu ruta


const express = require('express');
const router = express.Router();
const OldController = require('../controllers/OldController');

//Creá tu función redirigir
const redirigir = (req, res, next) => { //tu código acá 
res.redirect("/")
}

router.get('/ruta-en-desuso', redirigir,OldController.index); //Agregá la función redirigir como segundo parámetro de tu ruta

//validacionessss

const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

const {check, validationResult, body} = require('express-validator');

router.post('/registro', [
    
check('name').isLength({min:6}),

check('email').isEmail(),

check('password').isLength({min:6})

 ] ,UsuarioController.registro);

 //validaciones en controllers
 const express = require('express');
const router = express.Router();
const {  validationResult, body } = require('express-validator');

const userController = {
  login: (req, res) => {
    const errores = validationResult(req);

    //Chequear los errores acá, redirigir si hay errores
    if(!errores.isEmpty()){
      res.render('login', {errores: errores.array()})
    }

    if (req.body.name == 'admin' && req.body.pass == 123) {
    	res.redirect('/dashboard');
    }
  }  
}