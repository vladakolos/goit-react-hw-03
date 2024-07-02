import styles from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Find contacts by name..."
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
}
