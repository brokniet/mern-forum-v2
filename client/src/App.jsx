import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePost } from "./api/deletePost";
import { getPosts } from "./api/getPosts";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const newPosts = await getPosts();
      setPosts(newPosts.reverse());
    }
    fetchPosts();
  }, []);

  async function handleDeletePost(postId) {
    await deletePost(postId);
    setPosts(posts.filter((post) => post._id !== postId));
  }

  return (
    <div className="app">
      <header className="header">
        <div className="title-container">
          <h1 className="title">Welcome to my Forum</h1>
        </div>
        <Link to="posts/createPost">
          <button className="add-entry">Add entry</button>
        </Link>
      </header>
      <main className="main">
        <form
          className="filters-container"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            id="title-filter"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
        <ul className="posts">
          {posts
            .filter((post) => {
              return search.toLowerCase() === ""
                ? post
                : post.title.toLowerCase().includes(search);
            })
            .map((post) => {
              return (
                <li key={post._id}>
                  <Link to={`posts/${post._id}`}>{post.title}</Link>
                  <button onClick={() => handleDeletePost(post._id)}>X</button>
                </li>
              );
            })}
        </ul>
      </main>
    </div>
  );
}

export default App;
