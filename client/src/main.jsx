import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/index.css";
import Post from "./components/Post.jsx";
import CreatePostForm from "./components/CreatePostForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditPostForm from "./components/EditPostForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/posts/:postId",
    element: <Post />,
  },
  {
    path: "/posts/createPost",
    element: <CreatePostForm />,
  },
  {
    path: "/posts/editPost/:postId",
    element: <EditPostForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
