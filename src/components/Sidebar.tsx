import { Link, useLocation } from "react-router-dom";
import YLogoWhiteResized from "../Assets/YLogoWhiteResized.png"
import {Home, Search} from "lucide-react";
interface SidebarProps {
    onNewPost: () => void;
}

const navItems = [
    { label: "Home", path: "/" },
    { label: "Explore", path: "/explore"}
];

function Sidebar({ onNewPost }: SidebarProps) {
    const location = useLocation();

    return (
        <aside
            style={{
                width: "25%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "16px",
                borderRight: "1px solid #2f3336",
                boxSizing: "border-box",
                background: "black",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ fontSize: "24px", fontWeight: "bold", padding: "8px", color: "white"}}>
                    <img src={YLogoWhiteResized} alt="YLogoWhite" />
                </div>

                <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "16px",
                                    padding: "12px",
                                    borderRadius: "9999px",
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    color: "white",
                                    fontWeight: isActive ? "bold" : "normal",
                                    backgroundColor: isActive ? "#1a1a1a" : "transparent",
                                }}
                            >
                                {item.label === "Home" ? <Home/> : item.label === "Explore" ? <Search/> : ""}
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <button
                    onClick={onNewPost}
                    style={{
                        backgroundColor: "white",
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "17px",
                        border: "none",
                        borderRadius: "9999px",
                        padding: "12px 24px",
                        cursor: "pointer",
                    }}
                >
                    Post
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;