import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletePost } from './api/deletePost';
import { getPosts } from './api/getPosts';
import './App.css'

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const newPosts = await getPosts();
      setPosts(newPosts);
    }
    fetchPosts();
  }, []);

  async function handleDeletePost(postId) {
    await deletePost(postId);
    setPosts(posts.filter(post => post._id !== postId));
  }

  return (
    <div className="app">
      <header className="header">
        <div className="title-container">
          <h1 className="title">Welcome to my Forum!</h1>
          <h5 className="subtitle">Feel free to leave your feedback or anything you like</h5>
        </div>
        <button className="add-entry">Add entry</button>
      </header>
      <main className="main">
        <ul className="posts">
          {
            posts.map(post => {
              return(
                <li key={post._id}>
                  <Link to={`posts/${post._id}`}>{post.title}</Link>
                  <button onClick={() => handleDeletePost(post._id)}>X</button>  
                </li>
              )
            })
          }
        </ul>
      </main>
    </div>
  ) 
}

export default App
