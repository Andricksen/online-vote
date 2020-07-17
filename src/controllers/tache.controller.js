'use strict';

const Tache = require('../models/tache.model');
const Socket =require('../models/socket')
exports.findAll = function(req, res) {
  Tache.findAll(function(err, tache) {
    
    if (err)
    res.send(err);
    console.log('res', tache);
    res.send(tache);
  });
};


exports.create = function(req, res) {
    const new_tache = new Tache(req.query);
    
   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Tache.create(new_tache, function(err, tache) {

            if (err)
            res.send(err);
            Socket.new_brodcast_action("tache",tache,"create","tache")
            res.json({error:false,message:"tache ajouter avec succes !!",data:tache});
        });
    }
};


exports.findById = function(req, res) {
    Tache.findById(req.params.id, function(err, tache) {
        if (err)
        res.send(err);
        res.json(tache);
    });
};


exports.update = function(req, res) {
    console.log(req.query)
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Tache.update(req.query.id, new Tache(req.body),function(err, tache) {
            if (err)
            res.send(err);
            Socket.new_brodcast_action("secteur",tache,"update","secteur")
            res.json({ error:false, message: 'tache successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Tache.delete( req.params.id, function(err, tache) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'tache successfully deleted' });
  });
};