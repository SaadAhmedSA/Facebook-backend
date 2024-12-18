import Post from "../models/post.model.js"
import comment from "../models/comment.model.js"
// Add Share
const addComment = async (req, res) => {
    try {
      const {comment, postId ,commentby} = req.body;
      
      // Check if post exists
      const post = await Post.findById(postId);
      if (!post) return res.status(404).json({ message: "Post not found" });
  
      
  
      // Create a new Comment
      const Comment = await comment.create({ post: postId, commentby ,comment}).populate("post");
  
      res.status(201).json({
        message: "Post comment successfully",
        Comment,
      });
    } catch (error) {
      console.error("Error Comment post:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  const getAllComment = async (req, res) => {
    
      const { postId } = req.params;
  
      const Comment = await comment.find({ post: postId }).populate("commentby", "username email user_image");
  
      res.status(200).json({
        message: "Comment fetched successfully",
        Comment,
      });
    };
  
export {addComment,getAllComment}