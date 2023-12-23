"use client";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useNotificationContext } from "@/contexts";
import { hasMessageKey } from "@/util";

const VoteButtons = ({ id, score }: { id: string; score: number }) => {
  const router = useRouter();
  const { triggerNotification } = useNotificationContext();
  const vote = async (id: string, voteType: "upvote" | "downvote") => {
    try {
      let res = await fetch(`/api/vote/${id}/${voteType}`, {
        method: "POST",
        body: JSON.stringify(voteType),
        headers: { "Content-Type": "application/json" }
      });
      res = await res.json();

      if (!res.ok) {
        throw new Error(hasMessageKey(res) ? res.message : "Vote Failed: Internal Server Error");
      }
      triggerNotification(true, hasMessageKey(res) ? res.message : "Voted Successfully");
      router.refresh();
    } catch (error) {
      triggerNotification(true, hasMessageKey(error) ? error.message : "Vote Failed: Internal Server Error")
    }
  };
  return (
    <>
      <div className="cursor-pointer">
        <BiSolidUpvote color="lime" size={17} onClick={() => vote(id, "upvote")} />
      </div>
      <div className="cursor-pointer">
        <BiSolidDownvote color="red" size={17} onClick={() => vote(id, "downvote")} />
      </div>
      <h1 className="ml-1">{score}</h1>
    </>
  );
};

export default VoteButtons;
