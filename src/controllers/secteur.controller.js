'use strict';

const Secteur = require('../models/secteur.model');

exports.findAll = function(req, res) {
  Secteur.findAll(function(err, secteur) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', secteur);
    res.send(secteur);
  });
};


exports.create = function(req, res) {
    const new_secteur = new Secteur(req.query);
    console.log(req.body)
    console.log(req.params)
    console.log(req.query)
     
   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Secteur.create(new_secteur, function(err, secteur) {
            if (err)
            res.send(err);
            res.json({error:false,message:"secteur ajouter avec succes !!",data:secteur});
        });
    }
};


exports.findById = function(req, res) {
    Secteur.findById(req.params.id, function(err, secteur) {
        if (err)
        res.send(err);
        res.json(secteur);
    });
};


exports.update = function(req, res) {
    console.log(req.body)
    if(req.query.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Secteur.update(req.query.id, new Secteur(req.body), function(err, secteur) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'secteur successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Secteur.delete( req.params.id, function(err, secteur) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'secteur successfully deleted' });
  });
};