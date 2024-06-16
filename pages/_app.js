import '../styles/globals.css';
import Head from 'next/head';
import { Typography } from '@material-tailwind/react';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Meu Blog</title>
        <meta name="meu blog" content="meu blog com excelentes posts"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="mx-auto max-w-screen-xl">
        <div className="px-4 py-3 my-5 border-none rounded-xl bg-white">
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
        </div>

        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp
