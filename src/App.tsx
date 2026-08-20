import "./index.css";
import {Feed, Post} from "@/components/Feed.tsx";
import {BrowserRouter, Routes, Route, data} from "react-router-dom";
import Sidebar from "./components/Sidebar.tsx";
import SearchBar from "./components/SearchBar";
import FeedPage from "./pages/FeedPage.tsx";
import AppRoutes from "@/router";
import NewPostForm from "./components/NewPostForm.tsx";
import type {Newpost, Post} from "./types/post";
import {useState} from "react";
import {createPost} from "@/api/posts.ts";
import {deletePost} from "@/api/posts.ts";

const mockPosts = [
    {
        id: 1,
        title: "First post",
        body: "This is the first mock post showing up in the feed.",
        userId: 1,
        reactions: {
            likes: 12,
            dislikes: 1,
        },
    },
];


export function App() {
    const [isPostFormOpen, setIsPostFormOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>(mockPosts);
    const handleNewPost = async (post: Newpost) => {
        const createdPost = await createPost(post);
        console.log(createdPost);
        setPosts((currentPosts) => [createdPost,...currentPosts]);
    };
    const handleDeletePost = async (id: number) => {
        const deletedPost = await deletePost(id);
        console.log(deletedPost);

        setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id));
    }
  return (
      <BrowserRouter>
          <div className="flex w-full h-screen bg-black">
              <Sidebar onNewPost={() => setIsPostFormOpen(true)} />
              <AppRoutes posts={posts} onDeletePost={handleDeletePost}/>
              <div className="w-1/4"/>
              {isPostFormOpen && (
                  <NewPostForm onClose={() => setIsPostFormOpen(false)}
                  onSubmit={handleNewPost}/>
              )}
          </div>
      </BrowserRouter>
  );
}

export default App;