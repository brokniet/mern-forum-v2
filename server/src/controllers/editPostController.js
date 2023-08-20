import Post from "../models/Post.js";

export async function editPostController(req, res) {
  const { title, content } = req.body;
  const postId = req.params.postId;
  const post = await Post.findByIdAndUpdate(
    postId,
    { title, content },
    { new: true }
  );
  res.json(post);
}
