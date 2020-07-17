'user strict';
var dbConn = require('../../config/db.config');

//User object create
var Avoir = function(avoir){
    this.isDelete     = avoir.isDelete;
    this.Users_idUsers      = avoir.Users_idUsers;
    this.Skills_idSkill          = avoir.Skills_idSkill;
    
};
Avoir.create = function (newAvoir, result) {    
    dbConn.query("INSERT INTO avoir set ?", newAvoir, function (err, res) {
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
Avoir.findById = function (id, result) {
    dbConn.query("Select * from avoir where idAvoir = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Avoir.findAll = function (result) {
    dbConn.query("Select * from avoir", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('avoir : ', res);  
            result(null, res);
        }
    });   
};
Avoir.update = function(id, avoir, result){
  dbConn.query("UPDATE avoir SET etat=?,isDelete=?,Users_idUsers=?,Skills_idSkill=? WHERE idAvoir = ?", [avoir.isDelete,avoir.Users_idUsers,avoir.Skills_idSkill, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Avoir.delete = function(id, result){
     dbConn.query("DELETE FROM avoir WHERE idAvoir= ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};


module.exports= Avoir;