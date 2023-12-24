import { dbConnect } from "@/util";
import { VoteCooldown, Post } from "@/models";
import { type NextRequest } from "next/server";
import { type CooldownType } from "demdevvyshared/freeforums";
import { type PostType } from "demdevvyshared/models";

async function detectCooldown(ip: string): Promise<false | number> {
  const currentDate = Date.now();
  const activeCooldowns = await VoteCooldown.find({ ip, expiresAt: { $gt: currentDate } }) as CooldownType[];
  if (activeCooldowns.length === 0) return false;

  const furthestCooldownDoc = activeCooldowns.reduce((a, b) => a.expiresAt > b.expiresAt ? a : b);
  return Math.floor((furthestCooldownDoc.expiresAt.getTime() - currentDate) / 1000);
}

async function createVote(id: string, voteType: 'upvote' | 'downvote') {
  const incOrDec = voteType === "upvote" ? 1 : -1;
  const updatedPost: PostType | null = await Post.findOneAndUpdate(
    { _id: id },
    { $inc: { score: incOrDec } },
    { new: true }
  ).exec();
  if (!updatedPost) return true;
  if (updatedPost.score < -40) {
    Post.findByIdAndDelete(id).exec();
    return true;
  }
  return false;
}

async function createCooldown(ip: string) {
  const newCooldown = new VoteCooldown({ ip });
  await newCooldown.save();
}

export async function POST(req: NextRequest, { params }: { params: { id: string; voteType: string } }) {
  try {
    await dbConnect();

    const ip = req.headers.get('x-forwarded-for') || req.ip;
    if (!ip) return Response.json({ message: "Vote failed: Could not retrieve ip" }, { status: 200 });

    const isCooling = await detectCooldown(ip);
    if (isCooling !== false) return Response.json({ message: `Vote Cooldown: Try again in ${isCooling} seconds.` }, { status: 200 });

    if (params.voteType !== "upvote" && params.voteType !== "downvote") return Response.json({ message: "Vote Failed: Invalid vote type" }, { status: 200 });
    await createCooldown(ip);

    const isDeleted = await createVote(params.id, params.voteType);
    if (isDeleted) return Response.json({ message: "Post Banished Forever", type: 'deleted' }, { status: 200 });

    return Response.json({ message: "Voted successfully", type: 'voted' }, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Vote failed: Internal server error" }, { status: 500 });
  }
}