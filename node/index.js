var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var multer=require('multer');

var uplaod=multer({dest:'images/'})
 app.post('/test',uplaod.single('imagex'),function(req,res,next){
     console.log(req.file);
     
 })

var userModel = require("./Models/UserModel.js");
var userController = require("./Controllers/UserController.js")
// app.get('/hospitallist',function(req,res,next){
//     console.log(req.query);
//     res.send('req recieved');
// })
// app.listen(3001);

app.use(bodyParser.urlencoded({extended:true}));
app.post('/registration',userController.Validator,userController.checkUserExists,userController.genHash,userController.actualRegister)
app.listen(3002);