import { AnimatePresence } from "framer-motion";
import Layout from "../components/layout/Layout";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
