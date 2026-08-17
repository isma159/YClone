import "./index.css";
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
          <div style={{ display: "flex", width: "100vw"}}>
              <Sidebar onNewPost={handleNewPost} />
              <main style={{ flex: "50%", flexGrow: 0 }}>
              </main>
          </div>
      </BrowserRouter>
  );
}

export default App;