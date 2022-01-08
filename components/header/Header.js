import Link from "next/link";

import styles from "./Header.module.css";

const Header = (props) => {
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
                props.active === "projetos" ? styles.active : styles.inactive
              }`}
            >
              Projetos
            </a>
          </Link>
          <Link href="/sobre">
            <a
              className={`${
                props.active === "sobre" ? styles.active : styles.inactive
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
