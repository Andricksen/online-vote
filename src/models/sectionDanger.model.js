'user strict';
var dbConn = require('../../config/db.config');

//User object create
var Section_danger = function(section_danger){
    this.isDelete     = section_danger.isDelete;
    this.Dangers_idDanger      = section_danger.Dangers_idDanger;
    this.Sections_idSection          = section_danger.Sections_idSection;

    
};
Section_danger.create = function (newSection_danger, result) {    
    dbConn.query("INSERT INTO section_danger set ?", newSection_danger, function (err, res) {
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
Section_danger.findById = function (id, result) {
    dbConn.query("Select * from section_danger where idSection_danger = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Section_danger.findAll = function (result) {
    dbConn.query("Select * from section_danger", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('section_danger : ', res);  
            result(null, res);
        }
    });   
};
Section_danger.update = function(id, section_danger, result){
  dbConn.query("UPDATE section_dangers SET isDelete=?,Dangers_idDanger=?,Sections_idSection=? WHERE idSection_danger = ?", [section_danger.isDelete,section_danger.Dangers_idDanger,section_danger.section_danger, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Section_danger.delete = function(id, result){
     dbConn.query("DELETE FROM section_danger WHERE idSection_danger = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};



module.exports= Section_danger;