'use strict';

const Section = require('../models/section.model');

exports.findAll = function(req, res) {
  Section.findAll(function(err, section) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', section);
    res.send(section);
  });
};


exports.create = function(req, res) {
    const new_section = new Section(req.query);
    console.log(req.body)
    console.log(req.params)
    console.log(req.query)
    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Section.create(new_section, function(err, section) {
            if (err)
            res.send(err);
            res.json({error:false,message:"section ajouter avec succes !!",data:section});
        });
    }
};


exports.findById = function(req, res) {
    Section.findById(req.params.id, function(err, section) {
        if (err)
        res.send(err);
        res.json(section);
    });
};


exports.update = function(req, res) {
    console.log(req.query)
    if(req.query.constructor === Object && Object.keys(req.query).length === 0){
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Section.update(req.query.idSections, new Section(req.query), function(err, section) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'section successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Section.delete( req.params.id, function(err, section) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'section successfully deleted' });
  });
};