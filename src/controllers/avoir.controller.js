'use strict';

const Avoir = require('../models/avoir.model');

exports.findAll = function(req, res) {
    Avoir.findAll(function(err, avoir) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', avoir);
    res.send(avoir);
  });
};


exports.create = function(req, res) {

    const new_avoir = new Avoir(req.query);
    
   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'Veuiller remplir tous les champs' });
    }else{
        Avoir.create(new_avoir, function(err, avoir) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Avoir ajouter avec succes !!",data:avoir});
        });
    }
};


exports.findById = function(req, res) {
    Avoir.findById(req.params.id, function(err, avoir) {
        if (err)
        res.send(err);
        res.json(avoir);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Avoir.update(req.params.id, new Avoir(req.body), function(err, user) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'avoir successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Avoir.delete( req.params.id, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'avoir successfully deleted' });
  });
};

