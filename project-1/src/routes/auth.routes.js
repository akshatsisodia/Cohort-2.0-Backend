const express = require("express");
const authRouter = express.Router();
const { userRegisterApi, userLoginApi } = require("../controllers/auth.controller")

authRouter.post("/register", userRegisterApi)

authRouter.post("/login",userLoginApi)


module.exports = authRouter;
