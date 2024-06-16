import { GetServerSidePropsContext } from "next";
import PostBody from "../../ui/components/PostBody/PostBody";
import { ApiService } from "../../data/data/services/ApiService";
import { BlogPost } from "../../data/@types/BlogPostInterface";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const slug = context?.params?.postSlug;

    const posts = await ApiService.get('posts');

    const post = await posts.data.find((post) => {
        return post.data.slug === slug
    });

    if (!post) {
        return { notFound: true }
    }

    return {
        props: {
            post: post ? post.data : null
        }
    }
}

export default function MeuPost({ post }: { post: BlogPost }) {
    return (
        <>
            <PostBody post={post} />
        </>
    );
}