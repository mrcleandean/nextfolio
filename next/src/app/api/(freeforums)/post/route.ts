import { dbConnect } from "@/util";
import { Post, PostCooldown } from "@/models";
import { CooldownType } from "demdevvyshared/freeforums";
import { NextRequest } from "next/server";

async function detectCooldown(ip: string): Promise<false | number> {
  const currentDate = Date.now();
  const activeCooldowns = await PostCooldown.find({ ip, expiresAt: { $gt: currentDate } }) as CooldownType[];
  if (activeCooldowns.length === 0) return false;

  const furthestCooldownDoc = activeCooldowns.reduce((a, b) => a.expiresAt > b.expiresAt ? a : b);
  return Math.floor((furthestCooldownDoc.expiresAt.getTime() - currentDate) / 1000);
}

async function createCooldown(ip: string) {
  const newCooldown = new PostCooldown({ ip });
  await newCooldown.save();
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const ip = request.headers.get('x-forwarded-for') || request.ip;
    if (!ip) return Response.json({ message: "Post Failed: Could not retrieve ip" }, { status: 200 });

    const isCooling = await detectCooldown(ip);
    if (isCooling !== false) return Response.json({ message: `Post Cooldown: Try again in ${isCooling} seconds.` }, { status: 200 });

    await createCooldown(ip);

    const req = await request.json();
    let newPost = new Post(req);
    await newPost.save();

    return Response.json({ message: "Posted Successfully" }, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Post Failed: Internal Server Error" }, { status: 500 });
  }
}