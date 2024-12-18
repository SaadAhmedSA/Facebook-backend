import mongoose from "mongoose";

const ShareSchema = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
    },
    shareby:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
}
,{timestamps : true})

export default mongoose.model("Share" , ShareSchema)