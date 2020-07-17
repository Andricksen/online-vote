'danger strict';
var dbConn = require('../../config/db.config');

//Danger object create
var Danger = function(danger){
    this.name     = danger.name;
    this.description      = danger.description;
    this.image          = danger.image;
    this.isDelete          = danger.isDelete;
    
   
};

Danger.create = function (newDan, result) {    
    dbConn.query("INSERT INTO dangers set ?", newDan, function (err, res) {
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

Danger.findById = function (id, result) {
    dbConn.query("Select * from dangers where idDanger = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Danger.findAll = function (result) {
    dbConn.query("Select * from dangers", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('dangers : ', res);  
            result(null, res);
        }
    });   
};

Danger.update = function(id, danger, result){
  dbConn.query("UPDATE dangers SET name=?,description=?,image=?,isDelete=? WHERE idDanger = ?", [danger.name,danger.description,danger.image,danger.isDelete, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

Danger.delete = function(id, result){
     dbConn.query("DELETE FROM dangers WHERE idDanger = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Danger;