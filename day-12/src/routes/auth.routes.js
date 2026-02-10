const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

authRouter.post("/register",async (req, res)=>{
    const {name, email, password} = req.body;

    const isUserExist = await userModel.findOne({email});

    if(isUserExist){
        return res.status(409).json({
            message:"user with this email already exist"
        })
    }

    const user = await userModel.create({
        name,email,password:crypto.createHash("md5").update(password).digest("hex")
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("accessToken",token);

    res.status(201).json({
        message:"User Registered Successfully.",
        user:{
            name:user.name,
            email:user.email
        }
    })
})


authRouter.post("/login",async (req, res)=>{
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }

    const isPasswordCorrect = user.password === crypto.createHash("md5").update(password).digest("hex");

    if(!isPasswordCorrect){
        return res.status(401).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET);

    res.cookie("accessToken",token)

    res.status(200).json({
        message:"User Logged In Successfully."
    })

})


authRouter.get("/get-me",async (req, res)=>{
    const token = req.cookies.accessToken;

    const decode = jwt.verify(token,process.env.JWT_SECRET);

    console.log(decode);
    

    const user = await userModel.findById(decode.id)

    res.json({
        user:{
            name:user.name,
            email:user.email
        }
    })
})



module.exports = authRouter;