import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProp {
  onSearch: (query: string) => void;
  notify: any;
}

const SearchBar: React.FC<SearchBarProp> = ({ notify, onSearch }) => {
  const [input, setInput] = useState<string>("");
  const checkInputValue = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("event", event);
     console.log("event.target", event.target);
   
     console.log("input", input);
    
    if (input.trim() === "") {
      return notify();
    
    }
   
   onSearch(input);
    setInput("")
    
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
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
