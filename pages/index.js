import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio de Reno Almeida</title>
        <meta name="description" content="Portfolio de Reno Almeida" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={classes.main}>
        <h2 className="subtitle">reno beserra</h2>
        <h1 className="title">interseções entre tecnologia e design.</h1>
        <nav className={classes.homeNav}>
          <ul>
            <li className="subtitle">
              <Link href="/projects">projetos</Link>
            </li>
            <li className="subtitle">
              <Link href="/about">sobre</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Home;
