'secteur strict';
var dbConn = require('../../config/db.config');

//Secteur object create
var Secteur = function(secteur){
    this.name     = secteur.name;
    this.description      = secteur.description;
    this.isDelete          = secteur.isDelete;
    this.idUser          = secteur.idUser;
  
   
};
Secteur.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO secteurs set ?", newEmp, function (err, res) {
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
Secteur.findById = function (id, result) {
    dbConn.query("Select * from secteurs where idSecteur = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Secteur.findAll = function (result) {
    dbConn.query("Select * from secteurs", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('secteurs : ', res);  
            result(null, res);
        }
    });   
};
Secteur.update = function(id, secteur, result){
  dbConn.query("UPDATE secteurs SET name=?,description=?,isDelete=?,idUser=? WHERE idSecteur = ?", [secteur.name,secteur.description,secteur.isDelete,secteur.idUser, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Secteur.delete = function(id, result){
     dbConn.query("DELETE FROM secteurs WHERE idSecteur = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Secteur;