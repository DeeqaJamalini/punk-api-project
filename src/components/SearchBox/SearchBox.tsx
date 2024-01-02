// SearchBox.tsx
import React, { ChangeEvent } from 'react';

type SearchBoxProps = {
  onSearch: (query: string) => void;
};

function SearchBox({ onSearch }: SearchBoxProps) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search beers"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBox;
