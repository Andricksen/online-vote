'tache strict';
var dbConn = require('../../config/db.config');

//Tache object create
var Tache = function(tache){
    this.name     = tache.name;
    this.description      = tache.description;
    this.isDelete          = tache.isDelete;
  
   
};
Tache.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO taches set ?", newEmp, function (err, res) {
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
Tache.findById = function (id, result) {
    dbConn.query("Select * from taches where idTache = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Tache.findAll = function (result) {
    dbConn.query("Select * from taches", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('taches : ', res);  
            result(null, res);
        }
    });   
};
Tache.update = function(id, tache, result){
  dbConn.query("UPDATE taches SET name=?,description=?,isDelete=? WHERE idTache = ?", [tache.name,tache.description,tache.isDelete, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Tache.delete = function(id, result){
     dbConn.query("DELETE FROM taches WHERE idTache = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Tache;