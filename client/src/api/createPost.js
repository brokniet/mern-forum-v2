import { API_URL } from './config'

export async function createPost(title, content) {
    const response = await fetch(`${API_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                content: content
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }); 
    return response.json();
}