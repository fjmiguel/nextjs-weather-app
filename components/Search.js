import styles from "../styles/Search.module.css";

export const Search = ({
  placeholder,
  value,
  onFocus,
  onChange,
  onKeyDown
}) => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder={placeholder}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
