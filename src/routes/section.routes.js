const express = require('express')
const router = express.Router()
const sectionController = require('../controllers/section.controller');

//Récupérer tous les employés
router.get('/', sectionController.findAll);


// Créer un nouvel employé
router.post('/', sectionController.create);


// Récupérer un seul employé avec id
router.get('/:id', sectionController.findById);


// Mettre à jour un employé avec id
router.put('/:id', sectionController.update);


// Supprimer un employé avec id
router.delete('/:id', sectionController.delete);

module.exports = router