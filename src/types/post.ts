export interface Posts {
    posts: Post[],
    total: number,
    skip: number,
    limit: number
}

export interface Post {
    id: number,
    title: string,
    body: string,
    reactions: Reactions,
    views: number,
    userId: number
}

export interface ExtendedPost {
    id: number,
    title: string,
    body: string,
    reactions: Reactions,
    views: number,
    user: PostUser | undefined
}

export interface Reactions {
    likes: number
}

export interface Comments {
    comments: Comment[],
    total: number,
    skip: number,
    limit: number
}

export interface Comment {
    id: number,
    body: string,
    postId: number,
    likes: number,
    user: CommentUser
}

export interface PostUser {
    id: number,
    username: string,
    firstName: string,
    lastName: string
}

export interface CommentUser {
    id: number,
    username: string,
    fullName: string
}

export interface Users {
    users: PostUser[],
    total: number,
    skip: number,
    limit: number
}

export interface NewPost {
    body: string;
    userId: number;
    reactions: Reactions,
}