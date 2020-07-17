'use strict';

const Admin = require('../models/admin.model');
var crypto = require('crypto');





exports.findAll = function(req, res) {
    Admin.findAll(function(err, admin) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', admin);
    res.send(admin);
  });
};


exports.create = function(req, res) {

    const secret = req.query.password;
const hash = crypto.createHmac('sha256', secret)
                   .update('mmg')
                   .digest('hex');
    const new_admin = new Admin({fullname:req.query.fullname,email:req.query.email,phone:req.query.phone,password:hash});
    
   if(req.body.constructor === Object && Object.keys(req.query).length === 0){
       console.log(req.query);
        res.status(400).send({ error:true, message: 'Veuiller remplir tous les champs' });
    }else{
        Admin.create(new_admin, function(err, admin) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Admin ajouter avec succes !!",data:admin});
        });
    }
};


exports.findById = function(req, res) {
    Admin.findById(req.params.id, function(err, admin) {
        if (err)
        res.send(err);
        res.json(admin);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'veuillez remplir tous les champs !' });
    }else{
        Admin.update(req.params.id, new Admin(req.body), function(err, user) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'admin successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Admin.delete( req.params.id, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'admin successfully deleted' });
  });
};

exports.login = function(req, res) {
    console.log(req.params)
    const secret = req.params.pass;
    const hash = crypto.createHmac('sha256', secret)
                       .update('mmg')
                       .digest('hex');
    Admin.login( req.params.iden,hash, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: user});
  });
};