import Post from "@/models/PostModel";
import { dbConnect } from "@/util";

export const dynamic = "force-dynamic";

export async function POST(request: Request, { params }: { params: { parentId: string } }) {
  try {
    const req = await request.json();
    await dbConnect();
    const parentPost = await Post.findById(params.parentId);
    if (!parentPost) throw new Error("Could not find post");
    const commentPost = new Post(req);
    parentPost.children.push(commentPost._id);
    commentPost.parent = parentPost._id;
    await parentPost.save();
    await commentPost.save();
    return Response.json({ message: "Succesfully commented" }, { status: 201 });
  } catch (error) {
    if (error && typeof error === "object" && "message" in error) {
      return Response.json({ message: error.message }, { status: 500 });
    } else {
      return Response.json({ message: "Internal server error" }, { status: 500 });
    }
  }
}
