'user strict';
var dbConn = require('../../config/db.config');

//User object create
var Access = function(access){
    this.etat     = access.etat;
    this.Users_idUsers      = access.Users_idUsers;
    this.Sections_idSection          = access.Sections_idSection;
    this.Taches_idTache          = access.Taches_idTache;
    
};
Access.create = function (newAccess, result) {    
    dbConn.query("INSERT INTO access set ?", newAccess, function (err, res) {
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
Access.findById = function (id, result) {
    dbConn.query("Select * from access where idAccess = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Access.findAll = function (result) {
    dbConn.query("Select * from access", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('access : ', res);  
            result(null, res);
        }
    });   
};
Access.update = function(id, access, result){
  dbConn.query("UPDATE access SET etat=?,Users_idUsers=?,Sections_idSection=?,Taches_idTache=? WHERE idAccess = ?", [access.etat,access.Users_idUsers,access.Sections_idSection,access.Taches_idTache, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Access.delete = function(id, result){
     dbConn.query("DELETE FROM access WHERE idAccess= ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};


module.exports= Access;