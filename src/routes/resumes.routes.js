const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin.controller');


router.get('/', adminController.findAll);



router.post('/', adminController.create);



router.get('/:id', adminController.findById);


router.put('/:id', adminController.update);


router.delete('/:id', adminController.delete);


router.get('/:iden/:pass', adminController.login);

module.exports = router