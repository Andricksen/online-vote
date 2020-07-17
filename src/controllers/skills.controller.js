'use strict';

const Skills = require('../models/skills.model');

exports.findAll = function(req, res) {
  Skills.findAll(function(err, section) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', section);
    res.send(section);
  });
};


exports.create = function(req, res) {
    const new_section = new Skills(req.query);
    console.log(req.body)
    console.log(req.params)
    console.log(req.query)
  
   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Skills.create(new_section, function(err, section) {
            if (err)
            res.send(err);
            res.json({error:false,message:"section ajouter avec succes !!",data:section});
        });
    }
};


exports.findById = function(req, res) {
    Skills.findById(req.params.id, function(err, section) {
        if (err)
        res.send(err);
        res.json(section);
    });
};


exports.update = function(req, res) {
    console.log(req.query)
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Skills.update(req.query.id, new Skills(req.body), function(err, section) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'section successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Skills.delete( req.params.id, function(err, section) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'section successfully deleted' });
  });
};