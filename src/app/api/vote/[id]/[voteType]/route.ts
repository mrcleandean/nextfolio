import { dbConnect } from "@/util";
import Post from "@/models/PostModel";

export const dynamic = "force-dynamic";

export async function POST(_req: Request, { params }: { params: { id: string; voteType: string } }) {
  try {
    await dbConnect();
    const post = await Post.findById(params.id);
    if (!post) throw Error("Could not find post");
    const incOrDec = params.voteType === "upvote" ? 1 : -1;
    post.score += incOrDec;
    await post.save();
    return Response.json({ message: "Voted succesfully" }, { status: 200 });
  } catch (error) {
    if (error && typeof error === "object" && "message" in error) {
      console.log(error.message);
      return Response.json({ message: error.message }, { status: 500 });
    } else {
      return Response.json({ message: "Internal server error" }, { status: 500 });
    }
  }
}
