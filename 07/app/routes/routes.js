const bodyParser = require('body-parser');
const Sample = require('../models/sample')

// This will display all the details that are successfully entered in the database.
module.exports = (app) => {

    app.get('/api/show', function(req, res) {
        Sample.find(function(error, samples) {
            if (error)
                res.send(error);
            console.log('samples', samples);
            res.status(200);
            res.json(samples);
        });
    });

//This will validate if the email is valid or not 
//We are using regex below.    
    app.post('/api/insert',bodyParser.json(), function(req, res) {

        var regexEmail = /([\w.]+)@([\w\.]+)\.(\w+)/;
        var regexPassword = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,14})");

        var email = req.body.email;
        var password = req.body.password;

        if( !email.trim().match(regexEmail)){
            res.status(400);
            res.json({"message":"Please Enter Valid Email ID"});
        }

        else if(!password.trim().match(regexPassword)){
            res.status(400);
            res.json({"message":"Password should be atleast 8-14 characters long and must contain atleast an uppercase letter, lowercase letter, special character and also a numeric character "});
        }
        
        else{

        var record = new Sample(req.body);
        record.save(function(error, y) {
            if (error)
                console.log('saving failed');
            console.log('saved ' + y.message);
            res.status(201)
            res.json(y);
        });
        }
    });

// This is to edit the email and password. 
    app.post('/api/edit',function(req,res){
        let currentEmail = req.body.currentEmail;
        let currentPassword = req.body.currentPassword;
        let newEmail = req.body.newEmail;
        let newPassword = req.body.newPassword;

        Sample.findOneAndUpdate({email: currentEmail, password: currentPassword},
            {$set:{email: newEmail, password: newPassword}},
            {new: true}, (error,doc) => {
                console.log(doc);
                if(error){
                    res.json({"message":"Update failed "});
                    console.log("Update failed ");
                }
                if(doc == null){
                    res.status(400);
                    res.json({"message":"This ID doesnot exist, Please enter valid ID"});
                }
                else{
                    //res.send(doc);
                    res.json({"message":"Email and Password are updated successfully"})
                }
            })
    })

//This will delete the data from database.    
    app.delete('/api/delete',function(req,res){
        let deleteEmail = req.body.email;
        let deletePassword = req.body.password;

        Sample.findOneAndDelete({email:deleteEmail, password: deletePassword}, function(error, doc){
            if(error){
                res.json({"message":"Deletion failed! Try again."});
                console.log("Delete failed!");
            }
            if(doc == null){
                res.status(400);
                res.json({"message":"Details doesnot exist, Please enter valid details!!"});
            }
            else{
                res.status(201);
                res.json({"message":"Details are successfully deleted"});
            }
        });
    });

}