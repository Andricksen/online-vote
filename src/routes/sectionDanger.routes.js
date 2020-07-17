const express = require('express')
const router = express.Router()
const sectionDangerController = require('../controllers/sectionDanger.controller');


router.get('/', sectionDangerController.findAll);


router.post('/', sectionDangerController.create);

router.get('/:id', sectionDangerController.findById);

router.put('/:id', sectionDangerController.update);

router.delete('/:id', sectionDangerController.delete);

module.exports = router