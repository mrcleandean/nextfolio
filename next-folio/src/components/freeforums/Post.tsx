import Link from "next/link";
import { ReplyTab, VoteButtons, PostLoading } from "@/components/freeforums";
import type { PostType } from "@/shared/types/models";
import { Suspense } from "react";

const Post = async ({ isFocused, post }: { isFocused: boolean; post: PostType; }) => {
  const { _id, title, username, content, dateTime, score, parent, children } = post;
  return (
    <Suspense fallback={<PostLoading isFocused={isFocused} />}>
      <div
        className={`${isFocused ? "w-full border-b-[0.125rem]" : "w-[32.5rem] rounded-xl border-[1px]"
          } bg-black flex flex-col border-white`}
      >
        <Link href={`/freeforums/post/${_id}`} key={`${isFocused ? "focused-" + _id : "unfocused-" + _id}`}>
          <div className={`w-full flex justify-between items-center py-2 px-4 text-white text-[15.5px]`}>
            <h1 className={`${parent ? "text-[12px]" : ""}`}>{parent ? String(parent) : title}</h1>
            <h1>{username}</h1>
          </div>
        </Link>
        <div className="bg-white w-full p-1 flex justify-center items-center">
          <div className="bg-gray-300 w-full h-full text-black p-1 rounded-md min-h-[4rem] max-h-[22rem]">
            {content}
          </div>
        </div>
        <div className="w-full flex justify-between items-center py-2 px-4 text-white text-[14px]">
          <h1>{String(dateTime)}</h1>
          <div className="flex justify-evenly items-center gap-0.5">
            <VoteButtons id={_id} score={score} />
          </div>
        </div>
        <ReplyTab id={_id} />
      </div>
      {isFocused && (
        <div className="pl-4 w-full relative">
          <div className="absolute left-0 w-4 h-full flex justify-center">
            <div className="w-0.5 h-full bg-white" />
          </div>
          {children.map((childItem, i: number) => {
            if (!(typeof childItem === 'string')) {
              return <Post key={`child-post-${childItem._id}-${i}-${childItem.dateTime}`} post={childItem} isFocused={true} />;
            }
          })}
        </div>
      )}
    </Suspense>
  );
};

export default Post;
