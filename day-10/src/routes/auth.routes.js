const express = require('express');
const userModel = require('../models/user.model');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

authRouter.post('/register',async (req, res)=>{
    const {name, email, password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({email})

    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"User with this Email is already exists"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        name,email,password:hash
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie('jwt_token',token)

    res.status(201).json({
        message:"User Registered Successfully",
        user
    })


})


authRouter.post('/protected',async (req, res)=>{
    console.log(req.cookies);

    res.status(201).json({
        message:"getting cookies"
    })
})

authRouter.post('/login',async (req, res)=>{
    const {email, password } = req.body;

    const user = await userModel.findOne({email}) 

    if(!user){
        return res.status(404).json({
            message:"No user Found with this email"
        })
    }

    if(crypto.createHash("md5").update(password).digest("hex") !== user.password){
        return res.status(401).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({
        id:user._id,      
    },process.env.JWT_SECRET)

    res.cookie("jwt_token",token)

    res.status(201).json({
        message:"user loged In Successfully"
    })

})

module.exports = authRouter;