'skills strict';
var dbConn = require('../../config/db.config');

//Skills object create
var Skills = function(skills){
    this.name     = skills.name;
    this.description      = skills.description;
    this.isDelete          = skills.isDelete;
  
  
   
};
Skills.create = function (newSec, result) {    
    dbConn.query("INSERT INTO skills set ?", newSec, function (err, res) {
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
Skills.findById = function (id, result) {
    dbConn.query("Select * from skills where idSkill = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Skills.findAll = function (result) {
    dbConn.query("Select * from skills", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('skills : ', res);  
            result(null, res);
        }
    });   
};
Skills.update = function(id, skills, result){
  dbConn.query("UPDATE skills SET name=?,description=?,isDelete=? WHERE idSkill = ?", [skills.name,skills.description,skills.isDelete,skills.Secteurs_idSecteur, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Skills.delete = function(id, result){
     dbConn.query("DELETE FROM skills WHERE idSkill = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Skills;