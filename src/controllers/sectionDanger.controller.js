'use strict';

const Section_danger = require('../models/sectionDanger.model');

exports.findAll = function(req, res) {
    Section_danger.findAll(function(err, sectionDanger) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', sectionDanger);
    res.send(sectionDanger);
  });
};


exports.create = function(req, res) {

    const new_sectionDanger = new Section_danger(req.query);
    
   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'Veuiller remplir tous les champs' });
    }else{
        Section_danger.create(new_sectionDanger, function(err, sectionDanger) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Section_danger ajouter avec succes !!",data:sectionDanger});
        });
    }
};


exports.findById = function(req, res) {
    Section_danger.findById(req.params.id, function(err, sectionDanger) {
        if (err)
        res.send(err);
        res.json(sectionDanger);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Section_danger.update(req.params.id, new Section_danger(req.body), function(err, user) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'sectionDanger successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Section_danger.delete( req.params.id, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'sectionDanger successfully deleted' });
  });
};

