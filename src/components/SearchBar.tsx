import {useState} from "react";

interface SearchBarProps {onSearch: (value: string) => void;}

export function SearchBar ({onSearch}: SearchBarProps) {
    const [search, setSearch] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearch(value);
        onSearch(value);
    };
    return (
        <input type="text" value={search} onChange={handleChange} placeholder="Search"
               className="w-full p-3 rounded-full bg-[#1a1a1a] text-white placeholder-gray-500 border border-gray-700 outline-none"
        />
    )
}

export default SearchBar;