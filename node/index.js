var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var userModel = require("./Models/UserModel.js");
var userController = require("./Controllers/UserController.js")
// app.get('/hospitallist',function(req,res,next){
//     console.log(req.query);
//     res.send('req recieved');
// })
// app.listen(3001);

app.use(bodyParser.urlencoded({extended:true}));
app.post('/registration',userController.Validator,userController.genHash)
app.listen(3002);