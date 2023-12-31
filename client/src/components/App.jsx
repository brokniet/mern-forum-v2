import { Link } from "react-router-dom";
import PostsList from "./PostsList";
import "../styles/App.css";

function App() {
  return (
    <div className="app">
      <header className="mainpage-header">
        <div className="title-container">
          <h1 className="title">Chaotic Forum</h1>
        </div>
        <Link to="posts/createPost">
          <button className="add-entry">Add entry</button>
        </Link>
      </header>
      <main className="main">
        <PostsList />
      </main>
    </div>
  );
}

export default App;
