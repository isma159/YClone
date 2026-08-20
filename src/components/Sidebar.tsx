import { Link, useLocation } from "react-router-dom";
import YLogoWhiteResized from "@/Assets/YLogoWhiteResized.png"
import {Home, Icon, Search} from "lucide-react";


interface SidebarProps {
    onNewPost?: () => void;
}

const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Explore", path: "/explore", icon: Search },
];

function Sidebar({ onNewPost }: SidebarProps) {
    const location = useLocation();

    return (
        <aside className="w-1/4 h-screen flex flex-col justify-between p-4 box-border border-r border-[#2f3336] bg-black">
            <div className="flex flex-col gap-6">
                <Link to="/" className="p-2 block w-fit">
                    <img src={YLogoWhiteResized} alt="YLogoWhite" className="w-8" />
                </Link>

                <nav className="flex flex-col gap-1">
                    {navItems.map(({label, path, icon: Icon}) => {
                        const isActive = location.pathname === path;
                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`flex items-center gap-4 p-3 rounded-full text-xl no-underline text-white transition-all hover:bg-[#181818] hover:scale-105 ${
                                    isActive ? "font-bold bg-[#1a1a1a]" : "font-normal bg-transparent"
                                }`}
                            >
                                <Icon/> {label}
                            </Link>
                        );
                    })}
                </nav>

                <button
                    onClick={onNewPost}
                    className="bg-white text-black font-bold text-[17px] border-none rounded-full py-3 px-6 cursor-pointer transition-all hover:bg-[#e6e6e6] hover:scale-105"
                >
                    Post
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;