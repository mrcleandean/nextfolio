import type { FilterStringType } from 'demdevvyshared/freeforums';
import { dbConnect, isValidFilter } from "@/util";
import Post from "@/models/PostModel";
import type { SortOrder } from 'mongoose';

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    let filter: string, search: string, limit: number;
    if (!searchParams) filter = 'newest', search = '', limit = 10;
    else {
      const filterString = searchParams.get('filter');
      const limitVal = Number(searchParams.get('limit'));
      filter = (filterString && (isValidFilter(filterString))) ? filterString : 'newest';
      search = searchParams.get('search') || '';
      limit = typeof limitVal === 'number' && !isNaN(limitVal) ? Math.min(limitVal, 150) : 10
    }
    await dbConnect();
    const searchRegExp = new RegExp(search, 'i');
    const sortOption: {
      [key: string]: SortOrder
    } = {};
    if (filter === 'newest' || filter === 'admin') {
      sortOption.dateTime = -1;
    } else if (filter === 'negative') {
      sortOption.score = 1;
    } else {
      sortOption.score = -1;
    }
    const data = await Post.find({
      $and: [
        { parent: null, admin: filter === 'admin' },
        {
          $or: [
            { title: searchRegExp },
            { content: searchRegExp },
            { username: searchRegExp }
          ]
        }
      ]
    }).sort(sortOption).limit(limit);
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
