'user strict';
var dbConn = require('../../config/db.config');
const { use } = require('../routes/user.routes');

//User object create
var User = function(user){
    this.nom     = user.nom;
    this.postnom      = user.postnom;
    this.prenom          = user.prenom;
    this.sexe          = user.sexe;
    this.roles          = user.roles;
   
};
User.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO users set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
User.findById = function (id, result) {
    dbConn.query("Select * from users where idUsers = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
User.findAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('users : ', res);  
            result(null, res);
        }
    });   
};
User.update = function(id, user, result){
console.log('id '+id)
  dbConn.query("UPDATE users SET nom=?,postnom=?,prenom=?,sexe=?,roles=? WHERE idUsers = ?", [user.nom,user.postnom,user.prenom,user.sexe,user.roles, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
User.delete = function(id, result){
     dbConn.query("DELETE FROM users WHERE idUsers = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= User;