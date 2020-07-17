'use strict';

const Section_skill = require('../models/sectionSkill.model');

exports.findAll = function(req, res) {
    Section_skill.findAll(function(err, sectionSkill) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', sectionSkill);
    res.send(sectionSkill);
  });
};


exports.create = function(req, res) {

    const new_sectionSkill = new Section_skill(req.query);
    
   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'Veuiller remplir tous les champs' });
    }else{
        Section_skill.create(new_sectionSkill, function(err, sectionSkill) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Section_skill ajouter avec succes !!",data:sectionSkill});
        });
    }
};


exports.findById = function(req, res) {
    Section_skill.findById(req.params.id, function(err, sectionSkill) {
        if (err)
        res.send(err);
        res.json(sectionSkill);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Section_skill.update(req.params.id, new Section_skill(req.body), function(err, user) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'sectionSkill successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Section_skill.delete( req.params.id, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'sectionSkill successfully deleted' });
  });
};

