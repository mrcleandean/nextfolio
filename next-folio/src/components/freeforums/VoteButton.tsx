"use client";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { useRouter } from "next/navigation";

const VoteButtons = ({ id, score }: { id: string; score: number }) => {
  const router = useRouter();
  const vote = async (id: string, voteType: "upvote" | "downvote") => {
    try {
      const response = await fetch(`/api/vote/${id}/${voteType}`, {
        method: "POST",
        body: JSON.stringify(voteType),
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok) throw new Error("Response was not ok while voting");
      router.refresh();
    } catch (error) {
      if (error && typeof error === "object" && "message" in error) {
        console.log(error.message);
      } else {
        console.log("An unknown error has occured while voting");
      }
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
