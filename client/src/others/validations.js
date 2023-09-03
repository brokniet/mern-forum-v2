import { createPost } from "../api/createPost";
import { editPost } from "../api/editPost";
import { ConnectionError, ValidationError } from "./error";

export const validatePost = async (title, content, postId) => {
  if (!title) throw new ValidationError("title is required");
  if (!content) throw new ValidationError("content is required");
  if (title.length < 4) throw new ValidationError("title is too short");
  if (title.length < 10) throw new ValidationError("content is too short");
  if (title.length > 40) throw new ValidationError("title is too long");
  if (title.length > 1000) throw new ValidationError("content is too long");
  if (postId.length !== 24) throw new ValidationError("invalid post id");

  try {
    postId
      ? await editPost(title, content, postId)
      : await createPost(title, content);
  } catch (error) {
    throw new ConnectionError("database is not available");
  }
};
