const express = require('express')
const router = express.Router()
const accessController = require('../controllers/access.controller');


router.get('/', accessController.findAll);

router.post('/', accessController.create);

router.get('/:id', accessController.findById);

router.put('/:id', accessController.update);

router.delete('/:id', accessController.delete);

module.exports = router