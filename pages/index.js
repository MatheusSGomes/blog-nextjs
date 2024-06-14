import PostList from '../ui/components/PostList/PostList';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head></Head>
      <main>
        {/* <PostList posts={posts} /> */}
        <PostList />
      </main>
    </div>
  )
}
