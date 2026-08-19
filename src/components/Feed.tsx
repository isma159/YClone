import {MessageCircle, ThumbsUp, Trash, User} from "lucide-react";
import type {Post} from "@/types/post.ts";


export function Feed({posts}: {posts: Post[]}) {

    const tempPost: Post = {name: "John Doe", handle: "@johndoe123", content: "hello", timePosted: Date.now(), likes: 102, comments: []}
    const tempPost2: Post = {name: "Jane Doe", handle: "@janedoe123", content: "hi", timePosted: Date.now(), likes: 103, comments: []}

    return (
        <div className="flex flex-col w-full h-screen bg-black border-2 border-gray-800 divide-y-2 divide-gray-800 overflow-y-auto">
            {posts.map((post, index) =>(
                <Post key={index} post={post}/>
            ))}
            <Post post={tempPost}/>
            <Post post={tempPost2}/>
            <div></div>
        </div>
    );
}

export function Post({post}: {post: Post}) {
    return (
        <div className="flex w-full min-h-40 h-40">
            <div className="flex justify-center h-full min-w-25 w-25 bg-black pt-3">
                <div className="flex justify-center items-center w-15 h-15 rounded-full bg-gray-600 text-white">
                    <User size={32}/>
                </div>
            </div>
            <div className="flex flex-col w-full h-full">
                <div className="relative flex items-center w-full min-h-12  p-4 gap-2">
                    <h1 className="text-lg text-white font-bold">{post.name}</h1>
                    <h1 className="text-lg text-gray-700">{post.handle}</h1>
                    <h1 className="text-lg text-gray-700">•</h1>
                    <h1 className="text-lg text-gray-700">2h</h1>
                    <button className="absolute right-2 text-red-950 hover:text-red-600 hover:scale-110 transition-colors transition-transform"><Trash size={20}/></button>
                </div>
                <div className="flex w-full h-full px-4 text-white">
                    {post.content}
                </div>
                <div className="flex items-center w-full min-h-12 px-4 pybg-yellow-300-2 gap-8 text-gray-700">
                    <div className="group flex justify-center items-center w-15 h-full gap-2">
                        <button className="flex justify-center items-center group-hover:text-white hover:scale-110 transition-all"><ThumbsUp/></button>
                        <p className="group-hover:text-white transition-colors">{post.likes}</p>
                    </div>
                    <div className="group flex justify-center items-center w-15 h-full gap-2">
                        <button className="flex justify-center items-center group-hover:text-white hover:scale-110 transition-all"><MessageCircle/></button>
                        <p className="group-hover:text-white transition-colors">{post.comments.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}