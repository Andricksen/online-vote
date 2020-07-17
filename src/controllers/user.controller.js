'use strict';

const User = require('../models/user.model');

exports.findAll = function(req, res) {
  User.findAll(function(err, user) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', user);
    res.send(user);
  });
};


exports.create = function(req, res) {
    const new_user = new User(req.query);


   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'Veuillez fournir toute les informations !' });
    }else{
        User.create(new_user, function(err, user) {
            if (err)
            res.send(err);
            res.json({error:false,message:"user ajouter avec succes !!",data:user});
        });
    }
};


exports.findById = function(req, res) {
    User.findById(req.params.idUsers, function(err, user) {
        if (err)
        res.send(err);
        res.json(user);
    });
};


exports.update = function(req, res) {
    console.log(req.params)
    console.log(req.body)
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Veuillez fournir toute les informations' });
    }else{
        User.update(req.params.id, new User(req.body), function(err, user) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'user mise a jour avec succes' });
        });
    }
  
};


exports.delete = function(req, res) {
    User.delete( req.params.id, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'user supprimer avec succes !' });
  });
};