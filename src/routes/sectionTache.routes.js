const express = require('express')
const router = express.Router()
const sectionTacheController = require('../controllers/sectionTache.controller');


router.get('/', sectionTacheController.findAll);



router.post('/', sectionTacheController.create);



router.get('/:id', sectionTacheController.findById);


router.put('/:id', sectionTacheController.update);


router.delete('/:id', sectionTacheController.delete);



module.exports = router