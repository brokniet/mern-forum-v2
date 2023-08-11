import { API_URL } from "./config";

export async function getPost(postId) {
    const response = await fetch(`${API_URL}/posts/${postId}`);
    return response.json();
}