import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.css";

const Header = () => {
  const { asPath } = useRouter();

  console.log(asPath);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img src="/favicon.svg" alt="ig.news" />
          </a>
        </Link>
        <nav>
          <Link href="/projetos">
            <a
              className={`${
                asPath === "/projetos" ? styles.active : styles.inactive
              }`}
            >
              Projetos
            </a>
          </Link>
          <Link href="/sobre">
            <a
              className={`${
                asPath === "/sobre" ? styles.active : styles.inactive
              }`}
            >
              Sobre
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
