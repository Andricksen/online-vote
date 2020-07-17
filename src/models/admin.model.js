'user strict';
var dbConn = require('../../config/db.config');

//User object create
var Admin = function(admin){
    this.fullname     = admin.fullname;
    this.email      = admin.email;
    this.phone          = admin.phone;
    this.password          = admin.password;
    
};
Admin.create = function (newAdmin, result) {    
    dbConn.query("INSERT INTO admins set ?", newAdmin, function (err, res) {
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
Admin.findById = function (id, result) {
    dbConn.query("Select * from admins where idAdmins = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Admin.findAll = function (result) {
    dbConn.query("Select * from admins", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('admin : ', res);  
            result(null, res);
        }
    });   
};
Admin.update = function(id, admin, result){
  dbConn.query("UPDATE admins SET fullname=?,email=?,phone=?,password=? WHERE idAdmins = ?", [admin.fullname,admin.email,admin.phone,admin.password, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Admin.delete = function(id, result){
     dbConn.query("DELETE FROM admins WHERE idAdmins = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

Admin.login = function(ident,pass, result){
    console.log('identifiant : ' + ident+' pass: '+   pass)
    dbConn.query("SELECT * FROM admins WHERE (email=? OR phone=?) AND password=? ", [ident,ident,pass], function (err, res) {
       if(err) {
           console.log("error: ", err);
           result(null, err);
       }
       else{
           console.log(res)
           result(null, res);
       }
   }); 
};

module.exports= Admin;