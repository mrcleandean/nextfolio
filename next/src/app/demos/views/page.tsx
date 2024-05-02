"use client"
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { pages } from '@/components/demos/templates/pages';
import dynamic from "next/dynamic";
const ScalableViews = dynamic(() => import('@/components/demos/ScalableViews'), { ssr: false });

const ViewsDemo = () => {
    return (
        <>
            <Link href="/demos" className="fixed top-5 left-5 z-10">
                <div className="bg-gray-900 mb-2 p-2 rounded-xl cursor-pointer w-fit flex gap-1.5">
                    <IoArrowBack className="text-blue-200" size={24} />
                </div>
            </Link>
            <div className="bg-white min-h-screen flex items-center flex-col gap-5 pb-10">
                <ScalableViews initialRooms={pages.slice(0, 2)} />
            </div>
        </>
    )
}

export default ViewsDemo;