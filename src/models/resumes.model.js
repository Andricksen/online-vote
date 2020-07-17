'user strict';
var dbConn = require('../../config/db.config');

//User object create
var Resumes = function(resumes){
    this.entree     = resumes.entree;
    this.sortie      = resumes.sortie;
    this.Access_idAccess          = resumes.Access_idAccess;
};
Resumes.create = function (newResumes, result) {    
    dbConn.query("INSERT INTO resumes set ?", newResumes, function (err, res) {
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
Resumes.findById = function (id, result) {
    dbConn.query("Select * from resumes where idResumes = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Resumes.findAll = function (result) {
    dbConn.query("Select * from resumes", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('resumes : ', res);  
            result(null, res);
        }
    });   
};
Resumes.update = function(id, resumes, result){
  dbConn.query("UPDATE resumes SET entree=?,sortie=?,Access_idAccess=? WHERE idResumes = ?", [resumes.entree,resumes.entree,resumes.Access_idAccess, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Resumes.delete = function(id, result){
     dbConn.query("DELETE FROM resumes WHERE idResumes = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};



module.exports= Resumes;