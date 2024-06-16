import '../styles/globals.css';
import Head from 'next/head';
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Meu Blog</title>
        <meta name="meu blog" content="meu blog com excelentes posts"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="px-5 lg:py-0 mx-auto max-w-screen-lg">
        <div className="p-4 mt-5 mb-10 border-none rounded-xl bg-white">
          <div className="flex items-center justify-between">
            <Typography as="a" href="/" variant="h3" className="mr-4 ml-2 cursor-pointer py-1.5 text-black">
              Meu Blog
            </Typography>

            <div className="flex flex-row gap-2">
              <Link class="text-white bg-black p-2 rounded-md" href="/">Meus posts</Link>
              <Link class="text-white bg-black p-2 rounded-md" href="posts/publish">Novo post</Link>
            </div>
          </div>
        </div>
        <Toaster position="top-right" />
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp
