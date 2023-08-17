import Post from "../models/Post.js";

export async function getPostController(req, res) {
  const { postId } = req.params;
  const post = await Post.findById(postId);
  res.json(post);
}
