// FilterList.tsx
import React from 'react';

type FilterListProps = {
  onFilter: (filter: string) => void;
};

const FilterList = ({ onFilter }: FilterListProps) => {
  return (
    <div className="filter-list">
      <button onClick={() => onFilter('allBeers')}>All Beers</button>
      <button onClick={() => onFilter('highAlcohol')}>High Alcohol</button>
      <button onClick={() => onFilter('classicRange')}>Classic Range</button>
      <button onClick={() => onFilter('highAcidity')}>High Acidity</button>
    </div>
  );
}

export default FilterList;
