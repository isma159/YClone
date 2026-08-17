export interface Post {
    name: string,
    handle: string,
    content: string,
    timePosted: number
    likes: number
    comments: Comment[]
}

export interface Comment {
    name: string,
    handle: string,
    content: string,
    timePosted: number,
    likes: number
}