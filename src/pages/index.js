import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import styles from "../styles/Home.module.scss";

const easing = [0.6, -0.05, 0.1, 0.99];

const fadeInUp = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: easing } },
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio de Reno Almeida</title>
        <meta name="description" content="Portfolio de Reno Almeida" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
      >
        <motion.div variants={fadeInUp} className={styles.main}>
          <h2 className="subtitle">reno almeida</h2>
          <h1 className="title">interseções entre tecnologia e design.</h1>
          <nav className={styles.homeNav}>
            <ul>
              <li className="subtitle">
                <Link href="/projetos" prefetch>
                  projetos
                </Link>
              </li>
              <li className="subtitle">
                <Link href="/sobre" prefetch>
                  sobre
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
