import useIndex from '../data/hooks/pages/useIndex.page';
import PostList from '../ui/components/PostList/PostList';
import Head from 'next/head'

export default function Home() {
  const { posts } = useIndex();

  return (
    <div>
      <Head></Head>
      <main>
        <PostList posts={posts} />
      </main>
    </div>
  )
}
