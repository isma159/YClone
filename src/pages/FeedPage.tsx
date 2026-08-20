import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Feed } from "@/components/Feed";
import SearchBar from "@/components/SearchBar";
import type {ExtendedPost, Post, Posts, Users} from "@/types/post";
import {getAllPosts, getAllUsers} from "@/api/posts.ts";
import {PostView} from "../components/PostView.tsx";

const trending = [
    {tag:"GTA6", posts:"67k posts"},
    {tag:"Bratwurst", posts:"12.2k posts"},
    {tag:"Tung Tung", posts:"6.5k posts"}
]
function FeedPage({onDeletePost}) {
    const location = useLocation();
    const isExploreMode = location.pathname === "/explore";

    const [posts, setPosts] = useState<Posts>();
    const [selectedPost, setSelectedPost] = useState<ExtendedPost | null>();
    const [filteredPosts, setFilteredPosts] = useState<Posts>();
    const [query, setQuery] = useState<string>("");
    const [users, setUsers] = useState<Users>()

    useEffect(() => {
        getAllUsers().then(res => setUsers(res));
        if (!isExploreMode) {
            getAllPosts().then(res => {setPosts(res)});
        }
    }, [isExploreMode]);


    const handleSearch = (query: string) => {
        setQuery(query);

        if (query.trim() === "") {
            setFilteredPosts(posts)
            return;
        }
        if (posts) {
            const results = posts.posts.filter((p) =>
                p.body.toLowerCase().includes(query.toLowerCase())
            );

            const newPosts: Posts = {posts: results, total: posts.total, skip: posts.skip, limit: posts.limit}
            setFilteredPosts(newPosts);
        }
    };

    if (!isExploreMode && posts && users) {
        return (
            <div className="flex w-1/2">{selectedPost ? <PostView selectedPost={selectedPost} onDeletePost={onDeletePost} setSelectedPost={setSelectedPost}/> : <Feed posts={posts} users={users} setSelectedPost={setSelectedPost}/>}</div>
        )
    }

    return (
        <div className="flex flex-col w-1/2">
                <div className="p-4">
                    <SearchBar onSearch={handleSearch}/>
                </div>

            {isExploreMode && query.trim() === "" && (
                <div className="px-4">
                    <h2 className=" font-bold text-white mb-3">Trending for you</h2>
                    <div className="rounded-2xl overflow-hidden border border-gray-800 divide-y divide-gray-800">
                        {trending.map((topic) => (
                            <div
                                key={topic.tag}
                                className="flex justify-between items-center p-4 hover:bg-[#181818]"
                            >
                                <div>
                                    <p className="text-gray-500">Trending</p>
                                    <p className="text-white font-bold">{topic.tag}</p>
                                    <p className="text-gray-500 ">{topic.posts}</p>
                                </div>
                                <span className="text-gray-500">›</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {isExploreMode && query.trim() !== "" && filteredPosts && users && (
                <div className="px-4">
                    <p className="text-gray-500 mb-2">
                        {posts?.total} results for "{query}"
                    </p>
                    {selectedPost ? <PostView selectedPost={selectedPost} setSelectedPost={setSelectedPost}/> : <Feed posts={filteredPosts} users={users} setSelectedPost={setSelectedPost} onDeletePost={onDeletePost} />}
                </div>
            )}
        </div>
    );
}

export default FeedPage;