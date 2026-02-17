const followModel = require("../models/follow.model");

async function userFollowController(req, res){
    const followerId = req.user.id;
    const followeeId = req.params.id;

    if(followerId === followeeId){
        return res.status(400).json({
            message:"you cannot follow yourself"
        })
    }

    const followUser = await followModel.create({
        follower:followerId,
        followee:followeeId
    })

    res.status(201).json({
        message:"user followed Successfully",
        followUser
    })
}

async function userUnfollowController(req, res){
    const followerId = req.user.id;
    const followeeId = req.params.id;

    const unfollow = await followModel.findOneAndDelete({
        follower:followerId,
        followee:followeeId
    })

    res.status(200).json({
        message:"user unfollowed Successfully"
    })
    
}

module.exports = {
    userFollowController,
    userUnfollowController
}