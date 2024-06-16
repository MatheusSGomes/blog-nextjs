import '../styles/globals.css';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../ui/components/Navbar/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Meu Blog</title>
        <meta name="meu blog" content="meu blog com excelentes posts"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="px-5 lg:py-0 mx-auto max-w-screen-lg">
        <Navbar />
        <Toaster position="top-right" />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}

export default MyApp
