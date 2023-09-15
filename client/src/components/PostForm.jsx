import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CreatePostForm.css";
import { getPost } from "../api/getPost";
import { validatePost } from "../others/validations";

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

  async function handleSubmitPost() {
    await validatePost(title, content, props.postId);
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
        value={content}
        maxLength="1000"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <Link to="/">
        <button onClick={handleSubmitPost}>Submit</button>
      </Link>
    </form>
  );
}
