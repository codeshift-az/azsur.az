import { useState } from "react";
import "./searchbar.css";

const SearchBar = () => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  return (
    <form action="#">
      <div className="search-option hidden-xs">
        <div className="search-input-box">
          <input
            type="text"
            placeholder="Search..."
            className={`search-input-${!searchBarVisible && "in"}visible`}
          />
          <button
            type="submit"
            className={`search-input-${!searchBarVisible && "in"}visible`}
          >
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
      <a
        className="main-search"
        onClick={() => setSearchBarVisible(!searchBarVisible)}
      >
        <i className="fa fa-search" />
      </a>
    </form>
  );
};

export default SearchBar;
