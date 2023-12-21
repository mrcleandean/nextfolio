import { dbConnect } from "@/util";
import Post from "@/models/PostModel";
import { VoteCooldown } from "@/models";
import { type NextRequest } from "next/server";
import { CooldownType } from "demdevvyshared/freeforums";

async function detectCooldown(ip: string): Promise<false | number> {
  const currentDate = Date.now();
  const activeCooldowns = await VoteCooldown.find({ ip, expiresAt: { $gt: currentDate } }) as CooldownType[];
  if (activeCooldowns.length === 0) return false;

  const furthestCooldownDoc = activeCooldowns.reduce((a, b) => a.expiresAt > b.expiresAt ? a : b);
  return Math.floor(furthestCooldownDoc.expiresAt.getTime() / 1000);
}

async function createVote(id: string, voteType: 'upvote' | 'downvote') {
  const post = await Post.findById(id);
  if (!post) throw Error("Could not find post");

  const incOrDec = voteType === "upvote" ? 1 : -1;
  post.score += incOrDec;

  await post.save();
}

export async function POST(req: NextRequest, { params }: { params: { id: string; voteType: string } }) {
  try {
    await dbConnect();

    const ip = req.headers.get('x-forwarded-for') || req.ip;
    if (!ip) return Response.json({ message: "Vote failed: Could not retrieve ip" }, { status: 500 });

    const isCooling = await detectCooldown(ip);
    if (isCooling !== false) return Response.json({ message: `Vote Cooldown: Try again in ${isCooling} seconds` }, { status: 500 });

    if (params.voteType !== "upvote" && params.voteType !== "downvote") return Response.json({ message: "Vote Failed: Invalid vote type" }, { status: 500 });
    createVote(params.id, params.voteType)

    return Response.json({ message: "Voted successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Vote failed: Internal server error" }, { status: 500 });
  }
}