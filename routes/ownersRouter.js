const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owners-model');


if(process.env.NODE_ENV === 'development'){
    router.post("/create",async function(req,res){
        let owners = await ownerModel.find();

        if(owners.length > 0) return res.status(503).send("you dont have permission to create more owners");


        let{fullname,email,password} = req.body;

        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password
            
        });

        res.status(201).send(createdOwner);
    })
}


router.get("/admin",function(req,res){
    let success = req.flash("success");
    res.render("createproducts",{success});
})
//console.log(process.env.NODE_ENV); // $env:NODE_ENV="development"  (in terminal to set environment variable )



module.exports = router;