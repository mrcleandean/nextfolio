import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { Code, PaginateWithBoudary } from "@/components/demos";
import { paginateWithBoundaryJS, paginateWithBoundaryPy } from "@/components/demos/templates/codeStrings";

const PaginateDemo = () => {
    return (
        <>
            <Link href="/demos" className="fixed top-5 left-5">
                <div className="bg-gray-900 mb-2 p-2 rounded-xl cursor-pointer w-fit flex gap-1.5">
                    <IoArrowBack className="text-blue-200" size={24} />
                </div>
            </Link>
            <div className="bg-white min-h-screen flex items-center flex-col gap-5 pb-10">
                <PaginateWithBoudary />
                <Code code={paginateWithBoundaryJS} language={'js'} />
                <Code code={paginateWithBoundaryPy} language={'py'} />
            </div>
        </>
    )
}

export default PaginateDemo;