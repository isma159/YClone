import { Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<FeedPage />} />
        </Routes>
    );
}

export default FeedPage;