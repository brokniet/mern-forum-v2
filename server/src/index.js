import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import "dotenv/config";
import { getPostsController } from "./controllers/getPostsController.js";
import { deletePostController } from "./controllers/deletePostController.js";
import { createPostController } from "./controllers/createPostController.js";
import { getPostController } from "./controllers/getPostController.js";
import { editPostController } from "./controllers/editPostController.js";

const app = express();
const rateLimitMiddleware = rateLimit({
  max: 10,
  windowMs: 60 * 1000,
  message: "You have exceeded your 10 requests per minute limit.",
});

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(rateLimitMiddleware);

app.get("/posts", getPostsController);
app.post("/posts", createPostController);
app.delete("/posts/:postId", deletePostController);
app.get("/posts/:postId", getPostController);
app.post("/posts/editPost/:postId", editPostController);

app.use((req, res) => {
  res.status(404).send("404 Not Found :/");
});

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log(`listening on port ${process.env.PORT}`);
  app.listen(process.env.PORT);
});
