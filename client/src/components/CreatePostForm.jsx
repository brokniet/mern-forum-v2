import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CreatePostForm.css";
import { createPost } from "../api/createPost";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleCreatePost() {
    await createPost(title, content);
  }

  return (
    <div className="app">
      <header className="header">
        <Link to="/">
          <button className="back-button">←</button>
        </Link>
        <h1 className="title">Create a post</h1>
      </header>
      <main className="main">
        <form action="/posts" className="create-form">
          <label htmlFor="title-input">Title</label>
          <input
            id="title-input"
            type="text"
            maxLength="48"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="content-textarea">Content</label>
          <textarea
            id="content-textarea"
            cols="80"
            rows="15"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <Link to="/">
            <button onClick={handleCreatePost}>Submit</button>
          </Link>
        </form>
      </main>
    </div>
  );
}
