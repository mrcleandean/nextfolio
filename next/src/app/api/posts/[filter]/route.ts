import type { FilterStringType } from 'demdevvyshared/freeforums';
import { dbConnect } from "@/util";
import Post from "@/models/PostModel";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: { filter: FilterStringType } }) {
  try {
    await dbConnect();
    let data;
    switch (params.filter) {
      case 'newest':
        data = await Post.find({ parent: null }).sort({ dateTime: -1 }).limit(10);
        break;
      case 'negative':
        data = await Post.find({ parent: null }).sort({ score: 1 }).limit(10);
        break;
      case 'positive':
        data = await Post.find({ parent: null }).sort({ score: -1 }).limit(10);
        break;
      case 'admin':
        data = await Post.find({ parent: null, admin: true }).sort({ dateTime: -1 }).limit(10);
    }
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    if (typeof error === "object" && error !== null && "message" in error) {
      const message = (error as { message: string }).message;
      return Response.json({ message }, { status: 500 });
    } else {
      return Response.json({ message: "Failed to get posts" }, { status: 500 });
    }
  }
}
