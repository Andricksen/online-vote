const express = require('express')
const router = express.Router()
const avoirController = require('../controllers/avoir.controller');


router.get('/', avoirController.findAll);

router.post('/', avoirController.create);

router.get('/:id', avoirController.findById);

router.put('/:id', avoirController.update);

router.delete('/:id', avoirController.delete);

module.exports = router