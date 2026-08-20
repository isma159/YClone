import "./index.css";
import {BrowserRouter, Routes, Route, data} from "react-router-dom";
import Sidebar from "./components/Sidebar.tsx";
import SearchBar from "./components/SearchBar";
import FeedPage from "./pages/FeedPage.tsx";
import AppRoutes from "@/router";
import NewPostForm from "./components/NewPostForm.tsx";
import type {NewPost, Post} from "./types/post";
import {useState} from "react";
import {createPost} from "@/api/posts.ts";
import {deletePost} from "@/api/posts.ts";


export function App() {
    const [isPostFormOpen, setIsPostFormOpen] = useState(false);
    return (
      <BrowserRouter>
          <div className="flex w-full h-screen bg-black">
              <Sidebar onNewPost={() => setIsPostFormOpen(true)} />
              <AppRoutes isPostFormOpen={isPostFormOpen} setIsPostFormOpen={setIsPostFormOpen} />
          </div>
      </BrowserRouter>
  );
}

export default App;