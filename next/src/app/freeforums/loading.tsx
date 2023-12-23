import { PostLoading } from "@/components/freeforums";

const LoadingPosts = () => {
    const loadingPosts = Array.from({ length: 10 }).fill(0);
    return (
        <>
            {loadingPosts.map((_, i) => <PostLoading key={i} />)}
        </>
    )
}

export default LoadingPosts
