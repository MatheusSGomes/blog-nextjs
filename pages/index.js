import useIndex from '../data/hooks/pages/useIndex.page';
import PostList from '../ui/components/PostList/PostList';
import Head from 'next/head';
import { Navbar, Typography } from '@material-tailwind/react';

export default function Home() {
  const { posts } = useIndex();

  return (
    <div>
      <Head>
        <title>Meu Blog</title>
        <meta name="meu blog" content="meu blog com excelentes posts"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="mx-auto max-w-screen-xl">
        <Navbar className="px-4 py-3 my-5 border-none" color="white">
          <div className="flex items-center justify-center gap-y-4">
            <Typography
              as="a"
              href="#"
              variant="h3"
              className="mr-4 ml-2 cursor-pointer py-1.5 text-black"
            >
              Meu Blog
            </Typography>
          </div>
        </Navbar>

        <div className="grid grid-cols-3 gap-5">
          {posts.map((post) => (
            <PostList post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}
