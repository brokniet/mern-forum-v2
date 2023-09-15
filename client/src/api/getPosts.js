import { API_URL } from "./config";

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
}
