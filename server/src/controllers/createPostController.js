import Post from "../models/Post.js";

export async function createPostController(req, res) {
  const { title, content, uploadedAt } = req.body;
  const newPost = new Post({
    title,
    content,
    uploadedAt,
  });
  const createdPost = await newPost.save();
  res.json(createdPost);
}
