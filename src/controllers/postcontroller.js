  
  import mongoose from "mongoose";
  import jwt from "jsonwebtoken"
  import { v2 as cloudinary} from "cloudinary"
  import fs from "fs"
import Post from "../models/post.model.js";
import User from "../models/user.js";
  
  
 // Configuration
 cloudinary.config({ 
    cloud_name: 'dlvklue5t', 
    api_key: '437589555533986', 
    api_secret: 'pLmCAlttNk-YV2BHgb4aNENZH_M' // Click 'View API Keys' above to copy your API secret
  });
  // upload image
  const imageuploadtocloudinary = async (localpath) =>{
    try {
      const uploadResult = await cloudinary.uploader
      .upload(
          localpath, {
             resource_type : "auto"
          }
      ) 
      fs.unlinkSync(localpath);
      return uploadResult.url
    } catch (error) {
      fs.unlinkSync(localpath)
     return null
    }
  }
  
  
  //postblog

  const Addpost = async (req, res) => {

    const {description,postedby}= req.body;

    if(!description || !postedby)
        return res.send({message:"All feild required"})

    let ImageURL = null;

    // Check if an image file is provided and upload it
    if (req.file && req.file.path) {
      ImageURL = await imageuploadtocloudinary(req.file.path);
    }

    const newPost = await Post.create({
    postedby,
     description,
     image:ImageURL
     
    });
    
    if(!newPost) return res.send({message:"Error occured"})
    const post = await User.findByIdAndUpdate(postedby, {
      $push: { posts: newPost._id },
    });

    res.status(201).json({
      message: "post post created successfully",
      blog: newPost,
    });
  
};
//getAllblog
const getAllpost = async (req,res) => {

  const allPosts = await Post.find({}).populate("postedby", "username email");
      res.json({
        allPosts
    })
}

  
export {Addpost,getAllpost}