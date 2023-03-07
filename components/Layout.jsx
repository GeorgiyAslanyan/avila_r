import React from "react";
import Header from "@/components/Header";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({children}) => {
  const router = useRouter();

  return (
    <div>
      
      <Head>
        <title>AVILA</title>
        <meta name="description" content="Avila shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        !router.pathname.includes('/studio') && <Header/>
      }
      <main className=" min-h-screen">
        {children}
      </main>
      {
        !router.pathname.includes('/studio') && <Footer />
      }
    </div>
  );
};

export default Layout;
