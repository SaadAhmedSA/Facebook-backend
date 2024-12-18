import mongoose from "mongoose";

const SavedSchema = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
    },
    Savedby:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
}
,{timestamps : true})

export default mongoose.model("Save" , SaveSchema)