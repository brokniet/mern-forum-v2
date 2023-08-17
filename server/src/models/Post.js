import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  content: String,
  //   uploadedAt: {
  //     type: Date,
  //     default: Date.now,
  //   },
});

const PostModel = mongoose.model("Post", PostSchema);

// await PostModel.updateMany({}, { "Post.uploadedAt": "2023-08-14" });
// PostModel.prototype.add({ uploadedAt: Date, default: Date.now });

export default PostModel;
