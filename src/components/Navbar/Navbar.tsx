import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../Filterlist/Filterlist";
import "./Navbar.scss";

type NavbarProps = {
  onSearch: (query: string) => void;

  
  onFilter: (filter: string) => void;
};

const Navbar = ({ onSearch, onFilter }: NavbarProps) => {
  return (
   
    <nav className="navbar">
      
      <h1>Punk API</h1>
      <div className="navbar__search-box">
       
        <SearchBox onSearch={onSearch} />
      </div>

      <div className="navbar__filter-list">
        
        <FilterList onFilter={onFilter} />
      </div>
    </nav>
  );
};

export default Navbar;
