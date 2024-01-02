
import { useState, useEffect } from 'react';
import CardList from '../Cardlist/Cardlist';
import Navbar from '../Navbar/Navbar';
import { Beer } from '../../Types/Types';

type MainProps = {
  beers: Beer[];
};

const Main = ({ beers }: MainProps) => {
  // State variables for search query and filter
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // You can include additional logic here if needed when 'beers' prop changes
    // For example, fetching additional data or updating state
  }, [beers]);

  // Handler for updating the search query state
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Handler for updating the filter state
  const handleFilter = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  // Filter beers based on the selected filter
  const filteredBeers = beers.filter((beer) => {
    const includesSearchQuery = beer.name.toLowerCase().includes(searchQuery.toLowerCase());

    if (filter === 'allBeers') {
      return includesSearchQuery;
    } else if (filter === 'highAlcohol') {
      return includesSearchQuery && beer.abv > 6;
    } else if (filter === 'classicRange') {
      const firstBrewedYear = parseInt(beer.first_brewed.split('/')[1], 10);
      return includesSearchQuery && firstBrewedYear < 2010;
    } else if (filter === 'highAcidity') {
      return includesSearchQuery && beer.ph < 4;
    }

    return includesSearchQuery;
  });

  return (
    // Main container for the application
    <div className="main">
      {/* Navbar component for search and filter functionality */}
      <Navbar onSearch={handleSearch} onFilter={handleFilter} />

      {/* CardList component displaying filtered beers */}
      <CardList beers={filteredBeers} />
    </div>
  );
}

export default Main;
