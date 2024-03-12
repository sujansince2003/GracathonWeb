import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Graceathon</title>
        <meta name="description" content="Hackathon" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
