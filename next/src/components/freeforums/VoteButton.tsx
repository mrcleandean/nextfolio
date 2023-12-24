"use client";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { useNotificationContext } from "@/contexts";
import { hasMessageKey } from "@/util";
import { useEffect, useState } from "react";

const VoteButtons = ({ id, score }: { id: string; score: number }) => {
  const { triggerNotification } = useNotificationContext();
  const [clientVotes, setClientVotes] = useState(0);
  const vote = async (id: string, voteType: "upvote" | "downvote") => {
    try {
      let res = await fetch(`/api/vote/${id}/${voteType}`, {
        method: "POST",
        body: JSON.stringify(voteType),
        headers: { "Content-Type": "application/json" }
      });
      const data: {
        message: string;
        type?: 'voted' | 'deleted'
      } = await res.json();
      if (!res.ok) {
        throw new Error(hasMessageKey(data) ? data.message : "Vote Failed: Internal Server Error");
      }
      triggerNotification(true, hasMessageKey(data) ? data.message : "Voted Successfully");
      if (data.type === 'voted') setClientVotes(prev => voteType === 'upvote' ? prev + 1 : prev - 1);
      else if (data.type === 'deleted') console.log('deleted');
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
      <h1 className="ml-1">{score + clientVotes}</h1>
    </>
  );
};

export default VoteButtons;
