const express = require('express');
const router = express.Router();
 
const productsController = require('../controllers/productsController');
 
router.get('/', productsController.index);
router.post('/', productsController.almacenarEnDB);

router.put('/:id', productsController.editarRegistro)
router.delete('/:id', productsController.borrarRegistro);
 
module.exports = router;