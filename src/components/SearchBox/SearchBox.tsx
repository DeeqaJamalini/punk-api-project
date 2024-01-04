import "./SearchBox.scss";
import { ChangeEvent } from "react";

type SearchBoxProps = {
 
  onSearch: (query: string) => void;
};

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
  
    <div className="search-box">
    
      <input
        className="search-box__input"
        type="text"
        placeholder="Search beers"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBox;
