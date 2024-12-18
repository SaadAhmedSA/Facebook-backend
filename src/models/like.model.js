import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
    },
    likedby:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
}
,{timestamps : true})

export default mongoose.model("like" , likeSchema)