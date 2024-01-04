import { useState } from "react";
import "./Filterlist.scss";

type FilterListProps = {

  onFilter: (filter: string) => void;
};

const FilterList = ({ onFilter }: FilterListProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("allBeers");

  return (
    
    <div className="filter-list">
     
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
