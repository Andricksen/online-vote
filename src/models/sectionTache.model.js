'user strict';
var dbConn = require('../../config/db.config');

//User object create
var Section_tache = function(section_tache){
    this.isDelete     = section_tache.isDelete;
    this.Sections_idSection      = section_tache.Sections_idSection;
    this.Taches_idTache          = section_tache.Taches_idTache;
  
};
Section_tache.create = function (newSection_tache, result) {    
    dbConn.query("INSERT INTO section_tache set ?", newSection_tache, function (err, res) {
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
Section_tache.findById = function (id, result) {
    dbConn.query("Select * from section_tache where idSection_tache = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Section_tache.findAll = function (result) {
    dbConn.query("Select * from section_tache", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('section_tache : ', res);  
            result(null, res);
        }
    });   
};
Section_tache.update = function(id, section_tache, result){
  dbConn.query("UPDATE section_tache SET isDelete=?,Sections_idSection=?,Taches_idTache=? WHERE idSection_tache = ?", [section_tache.isDelete,section_tache.Sections_idSection,section_tache.Taches_idTache, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Section_tache.delete = function(id, result){
     dbConn.query("DELETE FROM section_tache WHERE idSection_tache = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};



module.exports= Section_tache;