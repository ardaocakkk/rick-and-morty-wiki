import React from 'react';

function SearchBar({ setSearch, setPageNumber }) {
  return (
    <form className="w-full flex items-center">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
            setPageNumber(1)
            setSearch(e.target.value);
        }}
        className="w-full p-2 border bg-[#2f3640] border-[#487eb0] rounded-md focus:outline-none focus:ring-2 focus:[#487eb0]"
      />
    </form>
  );
}

export default SearchBar;