const express = require('express')
const router = express.Router()
const skillsController = require('../controllers/skills.controller');

//Récupérer tous les employés
router.get('/', skillsController.findAll);


// Créer un nouvel employé
router.post('/', skillsController.create);


// Récupérer un seul employé avec id
router.get('/:id', skillsController.findById);


// Mettre à jour un employé avec id
router.put('/:id', skillsController.update);


// Supprimer un employé avec id
router.delete('/:id', skillsController.delete);

module.exports = router