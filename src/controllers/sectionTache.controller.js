'use strict';

const Section_tache = require('../models/SectionTache.model');

exports.findAll = function(req, res) {
    Section_tache.findAll(function(err, SectionTache) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', SectionTache);
    res.send(SectionTache);
  });
};


exports.create = function(req, res) {

    const new_SectionTache = new Section_tache(req.query);
    
   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'Veuiller remplir tous les champs' });
    }else{
        Section_tache.create(new_SectionTache, function(err, SectionTache) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Section_tache ajouter avec succes !!",data:SectionTache});
        });
    }
};


exports.findById = function(req, res) {
    Section_tache.findById(req.params.id, function(err, SectionTache) {
        if (err)
        res.send(err);
        res.json(SectionTache);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Section_tache.update(req.params.id, new Section_tache(req.body), function(err, user) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'SectionTache successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Section_tache.delete( req.params.id, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'SectionTache successfully deleted' });
  });
};

