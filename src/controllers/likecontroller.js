import Like from "../models/like.model.js"
import Post from "../models/post.model.js"
import User from "../models/user.js";
import jwt from "jsonwebtoken"
// Add like
const addlike = async (req, res) => {
    try {
      const { postId ,likedby} = req.body;
      
      // Check if post exists
      const post = await Post.findById(postId);
      if (!post) return res.status(404).json({ message: "Post not found" });
  
      // Check if user has already liked the post
      const existingLike = await Like.findOne({ post: postId, likedby});
      if (existingLike) return res.status(400).json({ message: "Post already liked" ,post});
  
      // Create a new like
      const like = await Like.create({ post: postId, likedby}).populate("post");
  
      res.status(201).json({
        message: "Post liked successfully",
        like,
      });
    } catch (error) {
      console.error("Error liking post:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  const getAlllikes = async (req, res) => {
    
      const { postId } = req.params;
  
      const likes = await Like.find({ post: postId }).populate("likedby", "username email user_image");
  
      res.status(200).json({
        message: "Likes fetched successfully",
        likes,
      });
    };
  
    const removelike = async (req,res) => {
      const {postId,likedby} = req.body;
      
      const post = await Post.findById(postId);
      if (!post) return res.status(404).json({ message: "Post not found" });
      
      // Check if user has already liked the post
      const notLike = await Like.findOne({ post: postId, likedby});
      if (!notLike) return res.status(400).json({ message: "Post not liked" ,post});
      
      const remove = await Like.findOneanddelete({ post: postId, likedby}).populate("post")
      
      res.status(201).json({
        message: "Post notliked successfully",
        remove,
      });
    }

  export {addlike,getAlllikes,removelike}