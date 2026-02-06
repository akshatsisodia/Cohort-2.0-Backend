const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken")

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { userName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({email})

  if(isUserAlreadyExists){
    return res.status(409).json({
        message:"Email already exists"
    })
  }

  const user = await userModel.create({
    userName,
    email,
    password,
  });

  const token = jwt.sign(
    {
        id:user._id,
        email:user.email
    },process.env.JWT_SECRET
  )

  res.cookie("token",token)

  res.status(201).json({
    message: "user registered",
    user,
    token
  });
});

module.exports = authRouter;
