import { Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import type {Post} from "../types/post";

interface AppRoutesProps {
    posts: Post[];
    onDeletePost: (id: number) => void;
}
export function AppRoutes({posts, onDeletePost}: AppRoutesProps) {
    return (
        <Routes>
            <Route path="/" element={<FeedPage posts={posts} onDeletePost={onDeletePost} />} />
            <Route path="/explore" element={<FeedPage posts={posts} onDeletePost={onDeletePost}/>}/>
        </Routes>
    );
}

export default AppRoutes;