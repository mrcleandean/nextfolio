import { Post } from "@/components/freeforums";
import type { PostType } from "demdevvyshared/models";
import type { Metadata } from 'next';

const getPost = async (id: string) => {
  try {
    const response = await fetch(`https://nextfolio-psi.vercel.app/api/post/${id}`, {
      method: 'GET',
      cache: 'no-store'
    });
    if (!response.ok) throw Error('Could not get post');
    const { data: post } = await response.json();
    return post;
  } catch (error) {
    if (error && typeof error === "object" && "message" in error) {
      console.log(error.message);
    } else {
      console.log("An unknown error has occured while getting posts");
    }
    return [];
  }
}

const getMetadata = async (id: string) => {
  try {
    const response = await fetch(`https://nextfolio-psi.vercel.app/api/post/metadata/${id}`, {
      method: 'GET',
      cache: 'no-store'
    });
    if (!response.ok) throw Error('Could not get post');
    const { data: postMetadata } = await response.json();
    return postMetadata;
  } catch (error) {
    if (error && typeof error === "object" && "message" in error) {
      console.log(error.message);
    } else {
      console.log("An unknown error has occured while getting posts");
    }
    return [];
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const postMetadata: { title: string, content: string } = await getMetadata(params.id);
  return {
    title: postMetadata.title,
    description: postMetadata.content,

  }
}


const FocusedContent = async ({ params }: { params: { id: string } }) => {
  const post: PostType = await getPost(params.id);
  return <Post post={post} isFocused={true} />;
};

export default FocusedContent;