import { Filters, Post, SearchBar, LoadMoreButton } from "@/components/freeforums";
import { PostType } from "@/types/models";
import { FilterStringType } from "@/types/freeforums";

const getPosts = async (filter: FilterStringType) => {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${filter}`, {
      method: "GET",
      cache: 'no-store'
    });
    if (!response.ok) throw Error("Could not get posts");
    const { data: posts } = await response.json();
    return posts;
  } catch (error) {
    if (error && typeof error === "object" && "message" in error) {
      console.log(error.message);
    } else {
      console.log("An unknown error has occured while getting posts");
    }
    return [];
  }
};

const FreeForums = async ({ params }: { params: { filter: string[] | undefined } }) => {
  let filterString: FilterStringType = 'newest'
  if (params.filter) {
    switch (params.filter[0]) {
      case 'negative':
        filterString = 'negative';
        break;
      case 'positive':
        filterString = 'positive';
        break;
      case 'admin':
        filterString = 'admin';
        break;
    }
  }
  const posts = await getPosts(filterString);
  return (
    <>
      <div className="w-[100vw] flex justify-center">
        <div className="flex flex-col items-center gap-3 mx-10">
          <SearchBar />
          <Filters />
          {posts.map((post: PostType, i: number) => {
            return <Post key={`home-post-${i}-${post._id}-${post.dateTime}`} post={post} isFocused={false} />;
          })}
          <LoadMoreButton />
        </div>
      </div>
    </>
  );
};

export default FreeForums;
