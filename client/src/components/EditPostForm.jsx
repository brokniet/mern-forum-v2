// import "../styles/CreatePostForm.css";
import PostForm from "./PostForm";
import { useParams, Link } from "react-router-dom";

export default function EditPostForm() {
  const { postId } = useParams();

  return (
    <div className="app">
      <header className="header">
        <Link to="/">
          <button className="back-button">←</button>
        </Link>
        <h1 className="title">Edit post</h1>
      </header>
      <main className="main">
        <PostForm postId={`${postId}`} />
      </main>
    </div>
  );
}
