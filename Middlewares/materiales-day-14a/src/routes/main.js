const express = require('express');
const router= express.Router();


const userLogs = require('../middlewares/userLog');

const aprrovedAdmin = require('../middlewares/admin');

const controller = require('../controllers/mainController');
;
router.get('/', controller.index);
router.get('/admin',aprrovedAdmin, controller.admin);



module.exports=router;