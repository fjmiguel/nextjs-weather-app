import styles from "../styles/ContentBox.module.css";

export const ContentBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
