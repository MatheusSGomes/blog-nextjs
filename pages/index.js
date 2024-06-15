import useIndex from '../data/hooks/pages/useIndex.page';
import PostList from '../ui/components/PostList/PostList';
import Head from 'next/head';

export default function Home() {
  const { posts } = useIndex();

  return (
    <div>
      <Head>
        <title>Meu Blog</title>
        <meta name="meu blog" content="meu blog com excelentes posts"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <h1 className="text-2xl font-bold">
        Hello world!
      </h1>
        <PostList posts={posts} />
      </main>
    </div>
  )
}
