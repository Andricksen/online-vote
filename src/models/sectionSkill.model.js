'user strict';
var dbConn = require('../../config/db.config');

//User object create
var Section_skill = function(section_skill){
    this.isDelete     = section_skill.isDelete;
    this.Sections_idSection      = section_skill.Sections_idSection;
    this.Skills_idSkill          = section_skill.Skills_idSkill;
    
    
};
Section_skill.create = function (newSection_skill, result) {    
    dbConn.query("INSERT INTO section_skill set ?", newSection_skill, function (err, res) {
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
Section_skill.findById = function (id, result) {
    dbConn.query("Select * from section_skill where idSection_skill = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Section_skill.findAll = function (result) {
    dbConn.query("Select * from section_skill", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('section_skill : ', res);  
            result(null, res);
        }
    });   
};
Section_skill.update = function(id, section_skill, result){
  dbConn.query("UPDATE section_skill SET isDelete=?,Sections_idSection=?,Skills_idSkill=? WHERE idSection_skill = ?", [section_skill.isDelete,section_skill.Sections_idSection,section_skill.Skills_idSkill, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Section_skill.delete = function(id, result){
     dbConn.query("DELETE FROM section_skill WHERE idSection_skill = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};



module.exports= Section_skill;