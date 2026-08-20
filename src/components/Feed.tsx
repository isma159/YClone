import {MessageCircle, ThumbsUp, Trash, User} from "lucide-react";
import type {Post} from "@/types/post.ts";
import {useState} from "react";

export function Feed({posts, onDeletePost}: {posts: Post[]; onDeletePost: (id:number) => void;}) {

    return (
        <div className="flex flex-col w-full h-screen bg-black border-2 border-gray-800 divide-y-2 divide-gray-800 overflow-y-auto">
            {posts.map((post) =>(
                <Post key={post.id} post={post} onDeletePost={onDeletePost} />
            ))}
            <div></div>
        </div>
    );
}

export function Post({post, onDeletePost}: {post: Post[]; onDeletePost: (id:number) => void;}) {
    const [showConfirm, setShowConfirm] = useState(false);
    return (
        <div className="flex w-full min-h-40 h-40">
            <div className="flex justify-center h-full min-w-25 w-25 bg-black pt-3">
                <div className="flex justify-center items-center w-15 h-15 rounded-full bg-gray-600 text-white">
                    <User size={32}/>
                </div>
            </div>
            <div className="flex flex-col w-full h-full">
                <div className="relative flex items-center w-full min-h-12 p-4 gap-2">
                    <h1 className="text-lg text-white font-bold">User {post.userId}</h1>
                    <h1 className="text-lg text-gray-700">@user{post.userId}</h1>
                    <h1 className="text-lg text-gray-700">•</h1>
                    <h1 className="text-lg text-gray-700">2h</h1>
                    <button onClick={() => setShowConfirm(true)} className="absolute right-2 text-red-950 hover:text-red-600 hover:scale-110 transition-colors transition-transform cursor-pointer"><Trash size={20}/></button>
                </div>
                <div className="flex flex-col w-full h-full px-4 text-white">
                    <h2 className="font-bold">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                <div className="flex items-center w-full min-h-12 px-4 gap-8 text-gray-700">
                    <div className="group flex justify-center items-center w-15 h-full gap-2">
                        <button className="flex justify-center items-center group-hover:text-white hover:scale-110 transition-all cursor-pointer"><ThumbsUp/></button>
                        <p className="group-hover:text-white transition-colors">{post.reactions?.likes ?? 0}</p>
                    </div>
                    <div className="group flex justify-center items-center w-15 h-full gap-2">
                        <button className="flex justify-center items-center group-hover:text-white hover:scale-110 transition-all cursor-pointer"><MessageCircle/></button>
                        <p className="group-hover:text-white transition-colors">0</p>
                    </div>
                </div>
            </div>
            {showConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="w-80 bg-black border border-gray-800 p-4 text-white">
                        <h2 className="font-bold mb-2">Delete post?</h2>
                        <p className="text-gray-400 mb-4">Are you sure you want to delete this post?</p>
                        <div className="flex justify-end gap-33">
                            <button onClick={() => setShowConfirm(false)} className="px-4 py-2 rounded-full bg-gray-800 text-white cursor-pointer hover:scale-105">Cancel</button>
                            <button onClick={() => { onDeletePost(post.id); setShowConfirm(false); }} className="px-4 py-2 rounded-full bg-red-600 text-white cursor-pointer hover:scale-105">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );}