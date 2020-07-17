const express = require('express')
const router = express.Router()
const tacheController = require('../controllers/tache.controller');

//Récupérer tous les employés
router.get('/', tacheController.findAll);


// Créer un nouvel employé
router.post('/', tacheController.create);


// Récupérer un seul employé avec id
router.get('/:id', tacheController.findById);


// Mettre à jour un employé avec id
router.put('/:id', tacheController.update);


// Supprimer un employé avec id
router.delete('/:id', tacheController.delete);

module.exports = router