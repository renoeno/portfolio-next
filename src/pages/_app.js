import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { BurguerMenu } from "../components/burguerMenu";
import Layout from "../components/layout/Layout";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <BurguerMenu />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
