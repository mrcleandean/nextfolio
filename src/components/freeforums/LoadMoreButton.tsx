"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LoadMoreButton = () => {
  const router = useRouter();
  const [limit, setLimit] = useState(10);

  return (
    <div
      onClick={() => setLimit(prev => prev + 10)}
      className="bg-white text-black rounded-lg px-3 py-2 mb-3 transition-all hover:scale-105 hover:bg-gray-200 cursor-pointer"
    >
      Load More
    </div>
  )
};

export default LoadMoreButton;
