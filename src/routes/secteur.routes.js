const express = require('express')
const router = express.Router()
const secteurController = require('../controllers/secteur.controller');

//Récupérer tous les employés
router.get('/', secteurController.findAll);


// Créer un nouvel employé
router.post('/', secteurController.create);


// Récupérer un seul employé avec id
router.get('/:id', secteurController.findById);


// Mettre à jour un employé avec id
router.put('/:id', secteurController.update);


// Supprimer un employé avec id
router.delete('/:id', secteurController.delete);

module.exports = router