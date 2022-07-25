import styles from "../styles/Header.module.css";

export const Header = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
