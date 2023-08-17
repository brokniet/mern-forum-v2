import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPost } from "../api/getPost";
import "../styles/Post.css";

export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchPost() {
      if (!postId) return;
      const newPost = await getPost(postId);
      setPost(newPost);
    }
    fetchPost();
  }, [postId]);

  return (
    <div className="app">
      <header className="header">
        <Link to="/">
          <button className="back-button">←</button>
        </Link>
        <h1 className="title">{post.title}</h1>
      </header>
      <main className="main">
        <section className="post">
          <p>{post.content}</p>
        </section>
      </main>
    </div>
  );
}
