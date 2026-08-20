import type {Comments, Posts, Users, NewPost} from "@/types/post.ts";

export function getAllPosts(): Promise<Posts> {

    const response = fetch("https://dummyjson.com/posts");
    return response.then(res => res.json());

}

export function getAllUsers(): Promise<Users> {

    const response = fetch("https://dummyjson.com/users?limit=208&skip=0");
    return response.then(res => res.json());

}

export async function getAllCommentsFromPost(id: number): Promise<Comments> {

    const emptyComments: Comments = {comments: [], total: 0, skip: 0, limit: 0}

    const response = await fetch(`https://dummyjson.com/comments/post/${id}`);
    if (!response.ok) return emptyComments;

    return await response.json() as Comments;

}

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