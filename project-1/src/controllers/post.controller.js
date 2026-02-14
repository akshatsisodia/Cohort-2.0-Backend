const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const {toFile} = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imageKit = ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
});

async function createPostController(req, res){

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"token is required, Unautharized Request"
        })
    }

    let decode = null;
    
    try{
         decode = jwt.verify(token,process.env.JWT_SECRET)
    }
    catch(err){
        return res.status(401).json({
            message:"user is not autharized"
        })
    }
    
    const file = await imageKit.files.upload({
        file:await toFile(Buffer.from(req.file.buffer),"file"),
        fileName:"Test",
        folder:"/posts"
    })

    const post = await postModel.create({
        caption:req.body.caption,
        imageUrl:file.url,
        user:decode.user
    })

    res.status(201).json({
        message:"Post created Successfully",
        post
    })

}


async function gettingUserPostsController(req, res) {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"request is not Autharised."
        })
    }

    let decoded;

    try{
        decoded = jwt.verify(token,process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message:"Token Invalid"
        })
    }

    const userId = decoded.user;

    console.log(userId);
    

    const posts = await postModel.find({
        user:userId
    })

    res.status(200).json({
        message:"posts fetched successfully.",
        posts
    })

}




module.exports = {
    createPostController,
    gettingUserPostsController
}