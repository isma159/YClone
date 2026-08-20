import type { NewPost } from "../types/post";

export async function createPost(post: NewPost) {
    const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    });

    return response.json();
}

export async function deletePost(id: number) {
    const response = await fetch(`https://dummyjson.com/posts/${id}`, {
        method: "DELETE",
    });
    return response.json();
}