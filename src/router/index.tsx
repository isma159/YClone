import { Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import type {Post} from "../types/post";

interface AppRoutesProps {
    onDeletePost: (id: number) => void;
}
export function AppRoutes({isPostFormOpen, setIsPostFormOpen}: {isPostFormOpen: boolean, setIsPostFormOpen: (isPostFormOpen: boolean) => void}) {
    return (
        <Routes>
            <Route path="/" element={<FeedPage isPostFormOpen={isPostFormOpen} setIsPostFormOpen={setIsPostFormOpen}/>} />
            <Route path="/explore" element={<FeedPage isPostFormOpen={isPostFormOpen} setIsPostFormOpen={setIsPostFormOpen}/>}/>
        </Routes>
    );
}

export default AppRoutes;