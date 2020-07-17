const express = require('express')
const router = express.Router()
const dangerController = require('../controllers/danger.controller');

//Récupérer tous les employés
router.get('/', dangerController.findAll);


// Créer un nouvel employé
router.post('/', dangerController.create);


// Récupérer un seul employé avec id
router.get('/:id', dangerController.findById);


// Mettre à jour un employé avec id
router.put('/:id', dangerController.update);


// Supprimer un employé avec id
router.delete('/:id', dangerController.delete);

module.exports = router