"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const FilterButtons = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleClick = (filter: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('filter', filter);
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <>
            <div
                onClick={() => handleClick('newest')}
                className={`${searchParams.get('filter')?.toString() === 'newest' ? 'bg-blue-300' : 'bg-white'} hover:bg-blue-300 w-20 h-9 flex justify-center items-center text-black rounded-lg hover:scale-105 transition-all  cursor-pointer`}
            >
                Newest
            </div>
            <div
                onClick={() => handleClick('positive')}
                className={`${searchParams.get('filter')?.toString() === 'positive' ? 'bg-green-300' : 'bg-white'} hover:bg-green-300 w-20 h-9 flex justify-center items-center text-black rounded-lg hover:scale-105 transition-all  cursor-pointer`}
            >
                Positive
            </div>
            <div
                onClick={() => handleClick('negative')}
                className={`${searchParams.get('filter')?.toString() === 'negative' ? 'bg-red-300' : 'bg-white'} hover:bg-red-300 w-20 h-9 flex justify-center items-center text-black rounded-lg hover:scale-105 transition-all  cursor-pointer`}
            >
                Negative
            </div>
            <div
                onClick={() => handleClick('admin')}
                className={`${searchParams.get('filter')?.toString() === 'admin' ? 'bg-yellow-200' : 'bg-white'} hover:bg-yellow-200 w-20 h-9 flex justify-center items-center text-black rounded-lg hover:scale-105 transition-all  cursor-pointer`}
            >
                Admin
            </div>
        </>

    )
}

export default FilterButtons;