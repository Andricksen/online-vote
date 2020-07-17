'use strict';

const Danger = require('../models/danger.model');

exports.findAll = function(req, res) {
  Danger.findAll(function(err, danger) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', danger);
    res.send(danger);
  });
};


exports.create = function(req, res) {
    const new_danger = new Danger(req.query);
    console.log(req.body)
    console.log(req.params)
    console.log(req.query)
    
   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Danger.create(new_danger, function(err, danger) {
            if (err)
            res.send(err);
            res.json({error:false,message:"danger ajouter avec succes !!",data:danger});
        });
    }
};


exports.findById = function(req, res) {
    Danger.findById(req.params.idDangers, function(err, danger) {
        if (err)
        res.send(err);
        res.json(danger);
    });
};


exports.update = function(req, res) {
    console.log(req.query)
    if(req.query.constructor === Object && Object.keys(req.query).length === 0){
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Danger.update(req.query.idDangers, new Danger(req.query), function(err, danger) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'danger successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Danger.delete( req.params.id, function(err, danger) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'danger successfully deleted' });
  });
};