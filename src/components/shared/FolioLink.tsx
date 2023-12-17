"use client";
import Link from "next/link";

const FolioLink = ({ title }: { title: string }) => {
    return (
        <div className="sm:ml-5 flex flex-col items-center text-white z-10">
            <h1 className="text-[25px] tracking-widest font-bold">{title}</h1>
            <h1 className="text-[15px] tracking-wider font-medium cursor-pointer">
                <Link href="/">
                    <u>Folio</u>
                </Link>
            </h1>
        </div>
    )
}

export default FolioLink;