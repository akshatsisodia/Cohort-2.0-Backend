const express = require("express");
const userModel  = require("../models/user.model");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

authRouter.post("/register",async (req, res)=>{

    const {name, email, password } = req.body;

    const isUserAlreadyRegister = await userModel.findOne({email})

    if(isUserAlreadyRegister){
        return res.status(409).json({
            message:"user with this email is already exists"
        })
    }

    const hashPassword = crypto.createHash("md5").update(password).digest("hex");

    const user = await userModel.create({
        name, email, password:hashPassword
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("accessToken",token);

    res.status(201).json({
        message:"User Register Successfully",
        user
    })

})

authRouter.get("/get-me",async (req, res)=>{
    const token = req.cookies.accessToken;

    const {id} = jwt.verify(token,process.env.JWT_SECRET)

    const user = await userModel.findById(id)
    
    res.json({
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
            message:"user with this email not found"
        })
    }

    const isPasswordCorrect = crypto.createHash("md5").update(password).digest("hex") === user.password;

    if(!isPasswordCorrect){
        return res.status(409).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("accessToken",token)

    res.status(201).json({
        message:"User Logged In Successfully"
    })
})

authRouter.post("/logout", (req, res)=>{
    res.clearCookie("accessToken")

    res.status(200).json({
        message:"User Logout Successfully"
    })
})

module.exports = authRouter;