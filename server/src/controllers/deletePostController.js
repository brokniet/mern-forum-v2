import Post from '../models/Post.js';

export async function deletePostController(req, res) {
    const postId = req.params.postId;
    const post = await Post.findByIdAndDelete(postId);
    res.json(post);
}