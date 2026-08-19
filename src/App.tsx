import "./index.css";
import {Feed} from "@/components/Feed.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar.tsx";
import SearchBar from "./components/SearchBar";
import FeedPage from "./pages/FeedPage.tsx";
import AppRoutes from "@/router";

export function App() {
    const handleNewPost = () => {
        console.log("handleNewPost");
    }
  return (
      <BrowserRouter>
          <div className="flex w-full h-screen bg-black">
              <Sidebar onNewPost={handleNewPost} />
              <AppRoutes />
              <div className="w-1/4"/>
          </div>
      </BrowserRouter>
  );
}

export default App;