const PostLoading = ({ isFocused }: { isFocused: boolean }) => {
    return (
        <div
            className={`${isFocused ? "w-full border-b-[0.125rem]" : "w-[32.5rem] rounded-xl border-[1px]"
                } bg-black flex flex-col border-white`}
        >
            <div className={`w-full flex justify-between items-center py-2 px-4 text-white text-[15.5px]`}>
                <h1>Loading...</h1>
                <h1>Loading...</h1>
            </div>
            <div className="bg-white w-full p-1 flex justify-center items-center">
                <div className="bg-gray-300 w-full h-full text-black p-1 rounded-md min-h-[4rem] max-h-[22rem]">
                    Loading...
                </div>
            </div>
            <div className="w-full flex justify-between items-center py-2 px-4 text-white text-[14px]">
                <h1>Loading...</h1>
                <div className="flex justify-evenly items-center gap-0.5">
                    Loading...
                </div>
            </div>
        </div>
    )
}

export default PostLoading;