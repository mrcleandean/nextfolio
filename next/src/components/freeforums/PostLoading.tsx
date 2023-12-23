const PostLoading = () => {
    return (
        <div className="w-[32.5rem] rounded-xl border-[1px] bg-black flex flex-col border-white">
            <div className="w-full flex justify-between items-center py-2 px-3 text-white">
                <div className="w-44 h-5 bg-gray-200 rounded-lg block" />
                <div className="w-44 h-5 bg-gray-200 rounded-lg block" />
            </div>
            <div className="bg-white w-full p-1 flex justify-center items-center">
                <div className="bg-gray-300 w-full h-full text-black p-1 rounded-md min-h-[4rem] max-h-[22rem]" />
            </div>
            <div className="w-full flex justify-between items-center py-2 px-3 text-white text-[14px]">
                <div className="w-44 h-5 bg-gray-200 rounded-lg" />
                <div className="flex justify-between items-center gap-2 pr-3">
                    <div className="w-4 h-4 bg-lime-300 rounded-lg" />
                    <div className="w-4 h-4 bg-red-500 rounded-lg" />
                </div>
            </div>
            <div className="w-full flex justify-start items-center gap-1.5 pt-1 pb-3 px-3 text-white text-[14px]">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
            </div>
        </div>
    )
}

export default PostLoading;