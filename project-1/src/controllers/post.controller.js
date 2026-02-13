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



module.exports = {
    createPostController
}