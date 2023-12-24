import { HomePost, InitQueries } from "@/components/freeforums";
import { PostType } from "demdevvyshared/models";
import { FilterStringType } from "demdevvyshared/freeforums";
import { Filters, SearchBar, LoadMoreButton } from "@/components/freeforums";
import { isValidFilter } from "@/util";
import { type ReactNode } from "react";


const getPosts = async (filter: FilterStringType, search: string, limit: number) => {
  try {
    const res = await fetch(`https://nextfolio-psi.vercel.app/api/posts?filter=${filter}&search=${search}&limit=${limit}`, {
      method: "GET",
      cache: 'no-store'
    });
    if (!res.ok) throw Error("Could not get posts");
    const { data: posts } = await res.json() as { data: PostType[] };
    return posts;
  } catch (error) {
    return [];
  }
};


const FreeForums = async ({ searchParams }: { searchParams: { filter?: string; search?: string; limit?: string; } }) => {
  const filterStr = searchParams?.filter;
  const filter = (filterStr && (isValidFilter(filterStr))) ? filterStr : 'newest';
  const search = searchParams?.search || '';
  const limitVal = Number(searchParams?.limit);
  const limit = typeof limitVal === 'number' && !isNaN(limitVal) ? Math.min(limitVal, 150) : 10
  const posts = await getPosts(filter, search, limit);;
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center gap-3 mx-10">
        <InitQueries />
        <SearchBar />
        <Filters />
        {posts.map((post: PostType, i: number) => {
          const currentDate = Date.now();
          return <HomePost
            key={`home-post-${i}-${currentDate}}`}
            keyVal={`${i}-${currentDate}`}
            post={post}
          />
        })}
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default FreeForums;


