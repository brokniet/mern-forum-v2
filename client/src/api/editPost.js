import { API_URL } from "./config";

export async function editPost(title, content, postId) {
  const response = await fetch(`${API_URL}/posts/editPost/${postId}`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
