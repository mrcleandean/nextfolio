import { dbConnect } from "@/util";
import Post from "@/models/PostModel";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const req = await request.json();
    let newPost = new Post(req);
    await newPost.save();
    return Response.json({ message: "Posted Successfully" }, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Failed to submit new post" }, { status: 500 });
  }
}