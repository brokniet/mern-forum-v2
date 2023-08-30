import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePost } from "../api/deletePost";
import { getPosts } from "../api/getPosts";
import Popup from "reactjs-popup";
import "../styles/App.css";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const newPosts = await getPosts();
      setPosts(newPosts.reverse());
      setIsLoading(false);
    }
    fetchPosts();
  }, []);

  async function handleDeletePost(postId) {
    await deletePost(postId);
    setPosts(posts.filter((post) => post._id !== postId));
  }

  return (
    <>
      {isLoading ? (
        <div className="custom-loader"></div>
      ) : (
        <>
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
                    <div className="buttons-container">
                      <Link to={`posts/editPost/${post._id}`}>
                        <button className="edit-button">✏️</button>
                      </Link>
                      <Popup trigger={<button>❌</button>} modal>
                        {(close) => (
                          <div className="delete-modal">
                            <span className="delete-modal-title">
                              Are you sure you want to delete this post?
                            </span>
                            <div className="delete-modal-button-container">
                              <button
                                className="delete-modal-button"
                                onClick={() => handleDeletePost(post._id)}
                              >
                                Yes
                              </button>
                              <button
                                className="delete-modal-button"
                                onClick={() => close()}
                              >
                                No
                              </button>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </div>
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </>
  );
}
