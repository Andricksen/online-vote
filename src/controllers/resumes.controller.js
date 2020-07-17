'use strict';

const Resumes = require('../models/resumes.model');

exports.findAll = function(req, res) {
    Resumes.findAll(function(err, resumes) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', resumes);
    res.send(resumes);
  });
};


exports.create = function(req, res) {

    const new_resumes = new Resumes(req.query);
    
   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'Veuiller remplir tous les champs' });
    }else{
        Resumes.create(new_resumes, function(err, resumes) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Resumes ajouter avec succes !!",data:resumes});
        });
    }
};


exports.findById = function(req, res) {
    Resumes.findById(req.params.id, function(err, resumes) {
        if (err)
        res.send(err);
        res.json(resumes);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Resumes.update(req.params.id, new Resumes(req.body), function(err, user) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'resumes successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Resumes.delete( req.params.id, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'resumes successfully deleted' });
  });
};

