var bcrypt = require('bcryptjs');
var dbConfig = require("../Config/DatabaseConfig.js");

var usermodel=require("../Models/UserModel");


function Validator (req,res,next){
    console.log(req.body);
    // res.send ('req recieved');
    if(req.body.username === ''){
        res.json({status:404,message:'username is required'})
    }
    else if (req.body.password === ''){
        res.json({status:404,message: 'password is required'})
    }
    else if (req.body.address==='') {
    res.jason({status:404,message:'address is required'})
    }
    else{
        res.json({status:200,message:'registered successfully'})
    }
    next();
}

function genHash(req,res,next){
    var saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds,function (err, hash)
    {
        if(hash){
            console.log(hash);
            req.hashkey= hash;
        }
        next(); 

        if(err){
            console.log(err);
        }
    }); 
}
function actualRegister(req,res,next){
    usermodel.create(
        {
            username: req.body.username,
            address: req.body.address,
            password: req.hashkey
        }
       
    )
    .then(function(result)
    {
        console.log(result)
        res.jason(result);
    })
    
    .catch(function(err){
console.log(err)
res.jason(err);
        })
  
}

function checkUserExists(req,res,next)
{
    usermodel.findOne({
        where:{username: req.body.username}
    })
    .then(function(result){
        console.log(result);
        if(result===null)
        {
            next();
        }
        else
        {
            res.jason({  status:409,message:'username already exists'})
        }
                               
    })
    .catch(function(err)
    {
        console.log(err)
        res.jason(err);
    })
}

module.exports = {
    Validator,genHash,actualRegister,checkUserExists
}