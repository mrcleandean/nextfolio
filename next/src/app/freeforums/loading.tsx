import { PostLoading, SearchBar, Filters } from "@/components/freeforums";
import { FaPlus } from "react-icons/fa";
const LoadingPosts = () => {
    const loadingPosts = Array.from({ length: 10 }).fill(0);
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col items-center gap-3 mx-10">
                <div className="flex items-center gap-2 pt-3">
                    <div className="bg-white h-10 w-[30rem] max-w-[100vw] p-2 text-black rounded-lg flex justify-start items-center">
                        <p className="text-gray-200">Search</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3 flex-col">
                    <div className="flex justify-evenly gap-2.5">
                        <div className='bg-white hover:bg-blue-300 w-20 h-9 flex justify-center items-center text-black rounded-lg hover:scale-105 transition-all  cursor-pointer'>
                            Newest
                        </div>
                        <div className='bg-white hover:bg-green-300 w-20 h-9 flex justify-center items-center text-black rounded-lg hover:scale-105 transition-all  cursor-pointer'>
                            Positive
                        </div>
                        <div className='bg-white hover:bg-red-300 w-20 h-9 flex justify-center items-center text-black rounded-lg hover:scale-105 transition-all  cursor-pointer'>
                            Negative
                        </div>
                        <div className='bg-white hover:bg-yellow-200 w-20 h-9 flex justify-center items-center text-black rounded-lg hover:scale-105 transition-all  cursor-pointer'>
                            Admin
                        </div>
                        <div className="flex justify-center items-center bg-white hover:bg-lime-300 w-20 h-9 rounded-lg hover:scale-105 transition-all text-black gap-2 cursor-pointer">
                            <FaPlus />
                            <p>New</p>
                        </div>
                    </div>
                </div>
                {loadingPosts.map((_, i) => <PostLoading key={i} />)}
            </div>
        </div>
    )
}

export default LoadingPosts
