import "../styles/CreatePostForm.css";
import PostForm from "./PostForm";
import { Link } from "react-router-dom";

export default function CreatePostForm() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/">
          <button className="back-button">←</button>
        </Link>
        <h1 className="title">Create post</h1>
      </header>
      <main className="main">
        <PostForm />
      </main>
    </div>
  );
}
