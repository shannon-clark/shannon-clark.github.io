import Head from "next/head";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#da291c" />
        <meta name="msapplication-TileColor" content="#ffc52e" />
        <meta name="theme-color" content="#ffc52e" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
