import "@/styles/globals.scss";
import Layout from "@/components/Layout";
import {StateContext} from '@/context/StateContext'
import { Toaster } from 'react-hot-toast'
import { client } from "@/Lib/client";

export default function App({ Component, pageProps, categories }) {
  console.log(categories);

  return (
    <StateContext>
      <Layout categories={categories}>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}