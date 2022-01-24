import styles from "./Layout.module.scss";

const Layout = (props) => {
  return <main className={styles.main}>{props.children}</main>;
};

export default Layout;
