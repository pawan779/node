var bcrypt = require('bcryptjs');
var dbConfig = require("../Config/DatabaseConfig.js");
function Validator (req,res,next){
    console.log(req.body);
    // res.send ('req recieved');
    if(req.body.username === ''){
        res.json({status:404,message:'username is required'})
    }
    else if (req.body.password === ''){
        res.json({status:404,message: 'password is required'})
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
        }
        if(err){
            console.log(err);
        }
    }); 
   next(); 
}
function Register(){
    //dbConfig.sequelize.query("insert into user_table values ("+ )
}


module.exports = {
    Validator,genHash,Register
}