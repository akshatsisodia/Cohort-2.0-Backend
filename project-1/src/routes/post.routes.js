const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage:storage})

postRouter.post("/",upload.single("postImage"),postController.createPostController)

postRouter.get("/", postController.gettingUserPostsController)


module.exports = postRouter;

