import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import Post from './models/Post.js';

const app = express();
app.use(express.json());

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
})


