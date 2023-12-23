"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);
    return (
        <div className="flex items-center gap-2 pt-3">
            <input
                className="bg-white h-10 w-[30rem] max-w-[100vw] p-2 text-black rounded-lg"
                placeholder="Search"
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('search')?.toString()}
            />
        </div>
    )
}

export default SearchBar;