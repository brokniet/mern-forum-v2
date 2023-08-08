import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:5000/posts');
      const newPosts = await response.json();
      setPosts(newPosts);
    }
    fetchPosts();
  }, []);

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
                <li key={post._id}>{post.title}</li>
              )
            })
          }
        </ul>
      </main>

    </div>
  ) 
}

export default App
