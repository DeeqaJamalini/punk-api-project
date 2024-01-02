
import SearchBox from '../SearchBox/SearchBox';
import FilterList from '../Filterlist/Filterlist';


type NavbarProps = {
  // Function to be called when a search query is submitted
  onSearch: (query: string) => void;
  
  // Function to be called when a filter button is clicked
  onFilter: (filter: string) => void;
};

const Navbar = ({ onSearch, onFilter }: NavbarProps) => {
  return (
    // Navigation bar component with title, search box, and filter list
    <nav className="navbar">
      {/* Title of the application */}
      <h1>Punk API</h1>

      {/* SearchBox component for inputting search queries */}
      <SearchBox onSearch={onSearch} />

      {/* FilterList component for selecting beer filters */}
      <FilterList onFilter={onFilter} />
    </nav>
  );
}

export default Navbar;
