import Post from '../models/Post.js';

export async function getPostsController(req, res) {
    const posts = await Post.find();
    res.json(posts);
}