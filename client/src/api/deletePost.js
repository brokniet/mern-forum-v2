import { API_URL } from "./config";

export async function deletePost(postId) {
    await fetch(`${API_URL}/posts/${postId}`, {
      method: 'DELETE'
    });
}