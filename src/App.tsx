import "./index.css";
import {Feed} from "@/components/Feed.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar.tsx";
import FeedPage from "./pages/FeedPage.tsx";
import {createRoot} from "react-dom/client";

export function App() {
    const handleNewPost = () => {
        console.log("handleNewPost");
    }
  return (
      <BrowserRouter>
          <div className="flex justify-center items-center bg-black">
              <Sidebar onNewPost={handleNewPost} />
              <Feed/>
          </div>
      </BrowserRouter>
  );
}

export default App;