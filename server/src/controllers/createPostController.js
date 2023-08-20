import Post from "../models/Post.js";

export async function createPostController(req, res) {
  const { title, content } = req.body;
  const newPost = new Post({
    title,
    content,
  });
  const createdPost = await newPost.save();
  res.json(createdPost);
}
