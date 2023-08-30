import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CreatePostForm.css";
import { createPost } from "../api/createPost";
import { getPost } from "../api/getPost";
import { editPost } from "../api/editPost";

export default function PostForm(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      if (!props.postId) return;
      const fetchedPost = await getPost(props.postId);
      setTitle(fetchedPost.title);
      setContent(fetchedPost.content);
    };
    fetchPost();
  }, []);

  async function handleSubmitPost(e) {
    if (title.length < 4 || content.length < 10) {
      return handleInvalidSubmission(e);
    }
    props.postId
      ? await editPost(title, content, props.postId)
      : await createPost(title, content);
  }

  function handleInvalidSubmission(e) {
    e.preventDefault();
    alert("Either the title or content are too short. Please try again.");
  }

  return (
    <form action="/posts" className="create-form">
      <label htmlFor="title-input">Title</label>
      <input
        id="title-input"
        type="text"
        maxLength="40"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content-textarea">Content</label>
      <textarea
        id="content-textarea"
        cols="80"
        rows="15"
        value={content}
        maxLength="1000"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <Link to="/">
        <button onClick={(e) => handleSubmitPost(e)}>Submit</button>
      </Link>
    </form>
  );
}
