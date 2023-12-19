import { dbConnect } from "@/util";
import Post from "@/models/PostModel";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    try {
        const id = params.id;
        await dbConnect();
        const data = await Post.findById(id).select({ title: 1, content: 1 });
        return Response.json({ data }, { status: 200 });
    } catch (error) {
        if (typeof error === "object" && error !== null && "message" in error) {
            const message = (error as { message: string }).message;
            return Response.json({ message }, { status: 500 });
        } else {
            return Response.json({ message: "Could not get post" }, { status: 500 });
        }
    }
}
