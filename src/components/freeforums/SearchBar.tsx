import { IoSearchOutline } from "react-icons/io5";
const SearchBar = () => {
    return (
        <div className="flex items-center gap-2 pt-3">
            <input
                className="bg-white h-10 w-[30rem] max-w-[100vw] p-2 text-black rounded-lg"
                placeholder="Search"
            />
            <div className="p-2 bg-lime-300 hover:scale-105 rounded-lg transition-all">
                <IoSearchOutline color="black" size={25} />
            </div>
        </div>
    )
}

export default SearchBar;