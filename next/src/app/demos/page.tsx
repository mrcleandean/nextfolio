import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const DevDemos = () => {
    return (
        <div className="w-full min-h-screen bg-white flex">
            <div className="m-10">
                <Link href="/">
                    <div className="bg-gray-900 mb-2 p-2 rounded-xl cursor-pointer w-fit flex gap-1.5">
                        <IoArrowBack className="text-blue-200" size={24} />
                        <h1 className="text-blue-200">Back to Folio</h1>
                    </div>
                </Link>
                <h1 className="text-3xl text-black">Dev Demos</h1>
                <p className="text-black">This page will be built incrementally as required.</p>
                <Link href="/demos/paginate-with-boundary">
                    <p className="text-blue-500 underline cursor-pointer">Paginate with boundary</p>
                </Link>
            </div>
        </div>
    )
}

export default DevDemos;