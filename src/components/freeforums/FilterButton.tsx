"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FilterButton = ({ hover, text }: { hover: string; text: string; }) => {
    const router = useRouter();
    const hrefText = text.toLowerCase();
    return (
        <Link href={`/freeforums/${hrefText}`} onClick={() => router.refresh()}>
            <div className={`${'hover:' + hover} w-20 h-9 flex justify-center items-center bg-white text-black rounded-lg hover:scale-105 transition-all  cursor-pointer`}>
                {text}
            </div>
        </Link>
    )
}

export default FilterButton;