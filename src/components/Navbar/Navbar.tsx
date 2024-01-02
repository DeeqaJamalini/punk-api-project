// Navbar.tsx
import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import FilterList from '../Filterlist/Filterlist';

type NavbarProps = {
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
};

function Navbar({ onSearch, onFilter }: NavbarProps) {
  return (
    <nav className="navbar">
      <h1>Punk API</h1>
      <SearchBox onSearch={onSearch} />
      <FilterList onFilter={onFilter} />
    </nav>
  );
}

export default Navbar;
