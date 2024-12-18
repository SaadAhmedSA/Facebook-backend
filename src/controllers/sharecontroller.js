import Post from "../models/post.model.js"
import Share from "../models/Share.model.js"
// Add Share
const addShare = async (req, res) => {
    try {
      const { postId ,shareby} = req.body;
      
      // Check if post exists
      const post = await Post.findById(postId);
      if (!post) return res.status(404).json({ message: "Post not found" });
  
      // Check if user has already liked the post
      const existingshare = await Share.findOne({ post: postId, shareby});
      if (existingshare) return res.status(400).json({ message: "Post already share" ,post});
  
      // Create a new like
      const Share = await Share.create({ post: postId, shareby}).populate("post");
  
      res.status(201).json({
        message: "Post Share successfully",
        Share,
      });
    } catch (error) {
      console.error("Error liking post:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  const getAllShare = async (req, res) => {
    
      const { postId } = req.params;
  
      const Shares = await Share.find({ post: postId }).populate("shareby", "username email user_image");
  
      res.status(200).json({
        message: "Share fetched successfully",
        Shares,
      });
    };
  
export {addShare , getAllShare}