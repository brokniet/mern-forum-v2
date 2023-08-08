import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import Post from './models/Post.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.post('/posts', async (req, res) => {
    const { title, content } = req.body;
    const newPost = new Post({
        title: title,
        content: content
    });
    const createdPost = await newPost.save();
    res.json(createdPost);
});

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(`listening on port ${process.env.PORT}`);
    app.listen(process.env.PORT);
});


