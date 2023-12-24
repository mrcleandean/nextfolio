"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LoadMoreButton = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    const currentLimit = Number(params.get('limit'));
    if (typeof currentLimit === 'number' && !isNaN(currentLimit)) {
      params.set('limit', String(Math.min(currentLimit + 10, 150)));
    } else {
      params.set('limit', String(10));
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div
      onClick={handleClick}
      className="bg-white text-black rounded-lg px-3 py-2 mb-3 transition-all hover:scale-105 hover:bg-gray-200 cursor-pointer"
    >
      Load More
    </div>
  )
};

export default LoadMoreButton;
