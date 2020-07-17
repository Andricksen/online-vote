const express = require('express')
const router = express.Router()
const sectionSkillController = require('../controllers/sectionSkill.controller');


router.get('/', sectionSkillController.findAll);



router.post('/', sectionSkillController.create);



router.get('/:id', sectionSkillController.findById);


router.put('/:id', sectionSkillController.update);


router.delete('/:id', sectionSkillController.delete);




module.exports = router