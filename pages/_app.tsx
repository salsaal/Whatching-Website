import "@/styles/globals.css";
import "../styles/App.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";

// The marketing site needs no app-wide data or toast providers; keeping this
// wrapper small keeps the shared script every page loads small too.
export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className={GeistSans.className}>
      {/* Titles, descriptions and share tags are set per page by components/Seo. */}
      <Head>
        <link rel="icon" href="/favicon2.ico" sizes="32x32" />
        <link rel="icon" href="/icon-48.png" type="image/png" sizes="48x48" />
        <link
          rel="icon"
          href="/icon-192.png"
          type="image/png"
          sizes="192x192"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#fbfdfb" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
