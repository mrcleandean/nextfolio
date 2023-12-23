import { dbConnect } from "@/util";
import Post from "@/models/PostModel";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    try {
        const id = params.id;
        await dbConnect();
        const data = await Post.findById(id).select({ title: 1, content: 1 }).exec();
        return Response.json({ data }, { status: 200 });
    } catch (error) {
        return Response.json({ message: "Get Post Failed: Internal Server Error" }, { status: 500 });
    }
}
