import React from "react";
import { IoIosSearch } from "react-icons/io";
import { SearchFormStyle } from "./styles/SearchFormStyle";

function Search({ filterBySearch, themes }) {
  // , query , setQuery
  return (
    <>
      <SearchFormStyle themes={themes} onSubmit={filterBySearch}>
        <div>
          <IoIosSearch className="search-icon" />
          <input
            autoComplete="off"
            name="inputSearch"
            type="text"
            placeholder="Search for a Country..."
            // value={query}
            // onKeyPress={(e) => setQuery(e.target.value)}
          />
        </div>
      </SearchFormStyle>
    </>
  );
}

export default Search;
