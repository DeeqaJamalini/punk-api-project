
import { ChangeEvent } from "react";

type SearchBoxProps = {
  // Function to be called when a search query is inputted
  onSearch: (query: string) => void;
};

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  // Handler for updating the search query based on input changes
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    // Search box component with an input field
    <div className="search-box">
      {/* Input field for typing search queries */}
      <input
        type="text"
        placeholder="Search beers"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBox;
