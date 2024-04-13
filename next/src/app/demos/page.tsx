import Link from "next/link";

const DevDemos = () => {
    return (
        <div className="w-full min-h-screen bg-white flex">
            <div className="m-10">
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