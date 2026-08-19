import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Feed } from "@/components/Feed";
import SearchBar from "@/components/SearchBar";
import type { Post } from "@/types/post";

const mockPosts: Post[] = [
    { name: "John Doe", handle: "@johndoe123", content: "hello", timePosted: Date.now(), likes: 102, comments: [] },
    { name: "Jane Doe", handle: "@janedoe123", content: "hi", timePosted: Date.now(), likes: 103, comments: [] },
];

const trending = [
    {tag:"GTA6", posts:"67k posts"},
    {tag:"Anus", posts:"42.3k posts"},
    {tag:"Cock", posts:"20.6k posts"},
    {tag:"Bratwurst", posts:"12.2k posts"},
    {tag:"Tung Tung", posts:"6.5k posts"}
]
function FeedPage() {
    const location = useLocation();
    const isExploreMode = location.pathname === "/explore";

    const [posts, setPosts] = useState<Post[]>([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (!isExploreMode) {
            setPosts(mockPosts); // just show the mock feed for now
        } else {
            setPosts([]);
        }
    }, [isExploreMode]);

    const handleSearch = (query: string) => {
        setQuery(query);

        if (query.trim() === "") {
            setPosts([]);
            return;
        }
        const results = mockPosts.filter((p) =>
            p.content.toLowerCase().includes(query.toLowerCase())
        );
        setPosts(results);
    };

    if (!isExploreMode) {
        return (
            <div className="flex w-1/2"><Feed posts={posts}/></div>
        )
    }

    return (
        <div className="flex flex-col w-1/2">
                <div className="p-4">
                    <SearchBar onSearch={handleSearch} />
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

            {isExploreMode && query.trim() !== "" && (
                <div className="px-4">
                    <p className="text-gray-500 mb-2">
                        {posts.length} results for "{query}"
                    </p>
                    <Feed posts={posts} />
                </div>
            )}
        </div>
    );
}

export default FeedPage;