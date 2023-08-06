import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    content: String
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;