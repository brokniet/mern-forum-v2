import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import { getPostsController } from './controllers/getPostsController.js';
import { deletePostController } from './controllers/deletePostController.js';
import { createPostController } from './controllers/createPostController.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/posts', getPostsController);
app.post('/posts', createPostController);
app.delete("/posts/:postId", deletePostController);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(`listening on port ${process.env.PORT}`);
    app.listen(process.env.PORT);
});


