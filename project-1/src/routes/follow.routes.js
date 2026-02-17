const express = require("express");
const followRouter = express.Router();
const followController = require("../controllers/follow.controller");
const identifyUser = require("../middleware/auth.middleware");


followRouter.post("/follow/:id",identifyUser,followController.userFollowController)

followRouter.delete("/unfollow/:id",identifyUser, followController.userUnfollowController)


module.exports = followRouter;
