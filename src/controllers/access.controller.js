'use strict';

const Access = require('../models/access.model');

exports.findAll = function(req, res) {
    Access.findAll(function(err, access) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', access);
    res.send(access);
  });
};


exports.create = function(req, res) {

    const new_access = new Access(req.query);
    
   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'Veuiller remplir tous les champs' });
    }else{
        Access.create(new_access, function(err, access) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Access ajouter avec succes !!",data:access});
        });
    }
};


exports.findById = function(req, res) {
    Access.findById(req.params.id, function(err, access) {
        if (err)
        res.send(err);
        res.json(access);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Access.update(req.params.id, new Access(req.body), function(err, user) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'access successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Access.delete( req.params.id, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'access successfully deleted' });
  });
};

