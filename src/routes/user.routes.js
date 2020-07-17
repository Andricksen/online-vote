const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');

//Récupérer tous les employés
router.get('/', userController.findAll);


// Créer un nouvel employé
router.post('/', userController.create);


// Récupérer un seul employé avec id
router.get('/:id', userController.findById);


// Mettre à jour un employé avec id
router.put('/:id', userController.update);


// Supprimer un employé avec id
router.delete('/:id', userController.delete);

module.exports = router