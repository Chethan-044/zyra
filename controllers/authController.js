const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require('../utils/generateToken')






exports.registerUser = async function(req,res){
   try{
            let { fullname,password,email} = req.body;
            if(password.length == 0) res.send("Password cannot be empty");

            let existingUser = await userModel.findOne({email});
            if(existingUser) return res.status(400).send("User with this email already exists");




            bcrypt.genSalt(10,function(err,salt){
                bcrypt.hash(password,salt,async function(err,hash){
                    if(err) return res.send(err.message);
                    else {
                        
                            let user = await userModel.create({
                                email,
                                password:hash,
                                fullname
                            });

                        let token = generateToken(user);
                        res.cookie("token",token);
                         res.send(user);

                    }

                })
            })

   }

   catch(err){
    console.log(err.message);
    res.status(500).send("Error registering user");
   }

}

exports.loginUser = async function(req,res){
    let { email,password} = req.body;

    let user = await userModel.findOne({email});
    if(!user) return res.status(400).send("User not found");

    bcrypt.compare(password , user.password , function(err,result){
        if(result){
            let token = generateToken(user);
            res.cookie("token",token);
            res.redirect("/shop");
            
        }
        else{
            res.status(400).send("Invalid email or password");
        }
    });
}

exports.logoutUser = function(req,res){
    res.cookie("token","");
    res.redirect("/");
}