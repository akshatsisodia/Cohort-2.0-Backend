const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
    follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"folloer id is required"]
    },
    followee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        reuired:[true,"followee id is required"]
    }
},{timestamps:true})

followSchema.index({follower:1,followee:1},{unique:true});

const followModel = mongoose.model("follow",followSchema);

module.exports = followModel;

