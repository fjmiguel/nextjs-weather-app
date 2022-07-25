import styles from "../styles/ErrorScreen.module.css";

export const ErrorScreen = ({ errorMessage, children }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.message}>{errorMessage}</h1>
      {children}
    </div>
  );
};
