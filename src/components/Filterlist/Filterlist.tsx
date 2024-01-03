import React, { useState } from "react";
import "./Filterlist.scss";

type FilterListProps = {
  // Function to be called when a filter button is clicked, takes a filter string as an argument
  onFilter: (filter: string) => void;
};

const FilterList = ({ onFilter }: FilterListProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("allBeers");

  return (
    // Container for the list of filter buttons
    <div className="filter-list">
      {/* Button to filter and display all beers */}
      <button
        className={`filter-list__button ${
          selectedFilter === "allBeers" ? "active" : ""
        }`}
        onClick={() => {
          setSelectedFilter("allBeers");
          onFilter("allBeers");
        }}>
        All Beers
      </button>

      {/* Button to filter and display beers with high alcohol content */}
      <button
        className={`filter-list__button ${
          selectedFilter === "highAlcohol" ? "active" : ""
        }`}
        onClick={() => {
          setSelectedFilter("highAlcohol");
          onFilter("highAlcohol");
        }}>
        High Alcohol
      </button>

      {/* Button to filter and display beers in the classic range */}
      <button
        className={`filter-list__button ${
          selectedFilter === "classicRange" ? "active" : ""
        }`}
        onClick={() => {
          setSelectedFilter("classicRange");
          onFilter("classicRange");
        }}>
        Classic Range
      </button>

      {/* Button to filter and display beers with high acidity */}
      <button
        className={`filter-list__button ${
          selectedFilter === "highAcidity" ? "active" : ""
        }`}
        onClick={() => {
          setSelectedFilter("highAcidity");
          onFilter("highAcidity");
        }}>
        High Acidity
      </button>
    </div>
  );
};

export default FilterList;
