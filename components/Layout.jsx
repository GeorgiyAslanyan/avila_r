import React from "react";
import Header from "@/components/Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>AVILA</title>
        <meta name="description" content="Avila internet shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mx-10 my-5 min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
