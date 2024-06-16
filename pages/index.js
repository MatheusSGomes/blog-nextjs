import useIndex from '../data/hooks/pages/useIndex.page';
import PostList from '../ui/components/PostList/PostList';
import Head from 'next/head';
import { Typography } from '@material-tailwind/react';

export default function Home() {
  const { posts } = useIndex();

  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {posts.map((post) => (
            console.log(post.id),
            <PostList key={post.id} post={post.data} />
          ))}
        </div>
    </div>
  )
}
