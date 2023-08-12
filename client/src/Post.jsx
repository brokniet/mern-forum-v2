import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from './api/getPost';


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
        {/* <header className="header">
            <div className="title-container">
            <h1 className="title">Welcome to my Forum!</h1>
            <h5 className="subtitle">Feel free to leave your feedback or anything you like</h5>
            </div>
            <button className="add-entry">Add entry</button>
        </header> */}
        <main className="main">
            <section className="post">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </section>
        </main>
        </div>
    );
};