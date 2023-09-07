import { createPost } from "../api/createPost";
import { editPost } from "../api/editPost";
import { ConnectionError, ValidationError } from "./error";

export const validatePost = async (title, content, postId) => {
  try {
    if (!title) throw new ValidationError("title is required");
    if (!content) throw new ValidationError("content is required");
    if (title.length < 4) throw new ValidationError("title is too short");
    if (content.length < 10) throw new ValidationError("content is too short");
    if (title.length > 40) throw new ValidationError("title is too long");
    if (content.length > 1000) throw new ValidationError("content is too long");
    if (postId && postId.length !== 24)
      throw new ValidationError("invalid post id");

    if (postId) {
      editPost(title, content, postId)
        .then(() => {
          return true;
        })
        .catch(() => {
          throw new ConnectionError("database is not available");
        });
    } else {
      createPost(title, content)
        .then(() => {
          return true;
        })
        .catch(() => {
          throw new ConnectionError("database is not available");
        });
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      //returnear false y mostrar modal ui, prevenir default
    }
    if (error instanceof ConnectionError) {
      //returnear false, reintentar la conexion o cortarla, mostrar ui correspondiente
    }
  }
};
