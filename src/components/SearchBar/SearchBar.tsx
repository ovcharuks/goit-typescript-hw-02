import { ChangeEvent, FormEvent } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProp {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProp> = ({ notify, onSearch }) => {
  const checkInputValue = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("event", event);
     console.log("event.target", event.target);
    
    if (event.target.search.value.trim() === "") {
      return notify();
    }
   
    return onSearch(event.target.search.value);
  };
  return (
    <header>
      <form onSubmit={checkInputValue}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
