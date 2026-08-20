import type {Comment, Comments, ExtendedPost, Post} from "@/types/post.ts";
import {ArrowLeft, Trash, User, ThumbsUp, MessageCircle} from "lucide-react";
import {useEffect, useState} from "react";
import {getAllCommentsFromPost} from "@/api/posts.ts";

export function PostView({selectedPost, setSelectedPost}: {selectedPost: ExtendedPost | null, setSelectedPost: (selectedPost: ExtendedPost | null) => void}) {

    const [comments, setComments] = useState<Comments>();

    useEffect(() => {
        if (selectedPost) {
            getAllCommentsFromPost(selectedPost.id).then(res => setComments(res));
        }
    }, []);

    return (
        <div className="flex flex-col w-full h-screen bg-black">
            <div className="flex items-center w-full h-20 border-b border-gray-800 px-8 gap-8">
                <button onClick={() => setSelectedPost(null)} className="text-white"><ArrowLeft size={32}/></button>
                <h1 className="text-white font-bold text-2xl">Post</h1>
            </div>
            <div className="flex flex-col w-full border-b border-gray-800 px-6 pb-6 gap-2">
                <div className="flex items-center w-full h-20 ">
                    <div className="flex justify-center items-center w-15 h-15 rounded-full bg-gray-600 text-white">
                        <User size={32}/>
                    </div>
                    <div className="relative flex items-center w-full min-h-12  p-4 gap-2">
                        <h1 className="text-lg text-white font-bold">{selectedPost?.user ? selectedPost.user.firstName + " " + selectedPost.user.lastName : "Unknown User"}</h1>
                        <h1 className="text-lg text-gray-700">{selectedPost?.user ? "@" + selectedPost.user.username : "@UnknowHandle"}</h1>
                        <h1 className="text-lg text-gray-700">•</h1>
                        <h1 className="text-lg text-gray-700">2h</h1>
                    </div>
                </div>
                <div className="flex flex-col w-full text-white text-xl px-6">
                    {selectedPost?.body}
                </div>
                <div className="flex items-center justify-center w-full border-t border-b border-gray-800 py-2 mt-4 text-lg">
                    <div className="flex mx-auto gap-2"><h1 className="font-bold text-white">{selectedPost?.reactions.likes}</h1> <h1 className="text-gray-700"> Likes</h1></div>
                    <div className="flex mx-auto gap-2"><h1 className="font-bold text-white">{selectedPost?.views}</h1> <h1 className="text-gray-700"> Views</h1></div>
                    <div className="flex mx-auto gap-2"><h1 className="font-bold text-white">{comments?.comments.length}</h1> <h1 className="text-gray-700"> Comments</h1></div>
                </div>
                <div className="flex items-center justify-center w-full py-2 mt-2 text-gray-700">
                    <button className="mx-auto hover:text-white hover:scale-110 transition-all"><MessageCircle/></button>
                    <button className="mx-auto hover:text-white hover:scale-110 transition-all"><ThumbsUp/></button>
                </div>
            </div>

            {comments?.comments.map(c => <CommentItem key={c.id} comment={c}/>)}
            <div/>
        </div>
    );
}

export function CommentItem({comment}: {comment: Comment}) {

    return (
        <div className="flex w-full border-b border-gray-800 mb-2">
            <div className="flex justify-center h-full min-w-25 w-25 bg-black pt-3">
                <div className="flex justify-center items-center w-15 h-15 rounded-full bg-gray-600 text-white">
                    <User size={32}/>
                </div>
            </div>
            <div className="flex flex-col w-full h-full">
                <div className="relative flex items-center w-full min-h-12  p-4 gap-2">
                    <h1 className="text-lg text-white font-bold">{comment.user ? comment.user.fullName : "Unknown User"}</h1>
                    <h1 className="text-lg text-gray-700">{comment.user ? "@" + comment.user.username : "@UnknowHandle"}</h1>
                    <h1 className="text-lg text-gray-700">•</h1>
                    <h1 className="text-lg text-gray-700">2h</h1>
                </div>
                <div className="flex text-left w-full h-full px-4 text-white">
                    {comment.body}
                </div>
                <div className="flex items-center w-full min-h-12 px-4 pybg-yellow-300-2 gap-8 text-gray-700">
                    <div className="group flex justify-center items-center w-15 h-full gap-2">
                        <button className="flex justify-center items-center group-hover:text-white hover:scale-110 transition-all"><ThumbsUp/></button>
                        <p className="group-hover:text-white transition-colors">{comment.likes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}