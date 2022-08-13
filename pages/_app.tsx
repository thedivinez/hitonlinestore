import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app'
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Harare Institute Of Technology</title>
    </Head>
    <Toaster position="top-right" reverseOrder={false} />
    <Component {...pageProps} />
  </>
}

export default MyApp
