'secteur strict';
var dbConn = require('../../config/db.config');

//Section object create
var Section = function(secteur){
    this.name     = secteur.name;
    this.description      = secteur.description;
    this.isDelete          = secteur.isDelete;
    this.idUser          = secteur.idUser;
    this.Secteurs_idSecteur =secteur.Secteurs_idSecteur
   
};
Section.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO sections set ?", newEmp, function (err, res) {
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
Section.findById = function (id, result) {
    dbConn.query("Select * from sections where idSection = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Section.findAll = function (result) {
    dbConn.query("Select * from sections", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('sections : ', res);  
            result(null, res);
        }
    });   
};
Section.update = function(id, secteur, result){
  dbConn.query("UPDATE sections SET name=?,description=?,isDelete=?,Secteurs_idSecteur=? WHERE idSection = ?", [secteur.name,secteur.description,secteur.isDelete,secteur.idUser,secteur.Secteurs_idSecteur, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Section.delete = function(id, result){
     dbConn.query("DELETE FROM sections WHERE idSection = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Section;