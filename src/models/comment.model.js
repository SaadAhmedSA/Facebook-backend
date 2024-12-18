import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment : {
       type : String,
       required :true
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",
        required:true
    },
    commentby : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",  
        required : true

    }
})

export default mongoose.model("Comment",commentSchema)