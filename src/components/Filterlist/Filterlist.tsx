type FilterListProps = {
  // Function to be called when a filter button is clicked, takes a filter string as an argument
  onFilter: (filter: string) => void;
};

const FilterList = ({ onFilter }: FilterListProps) => {
  return (
    // Container for the list of filter buttons
    <div className="filter-list">
      {/* Button to filter and display all beers */}
      <button onClick={() => onFilter("allBeers")}>All Beers</button>

      {/* Button to filter and display beers with high alcohol content */}
      <button onClick={() => onFilter("highAlcohol")}>High Alcohol</button>

      {/* Button to filter and display beers in the classic range */}
      <button onClick={() => onFilter("classicRange")}>Classic Range</button>

      {/* Button to filter and display beers with high acidity */}
      <button onClick={() => onFilter("highAcidity")}>High Acidity</button>
    </div>
  );
};

export default FilterList;
