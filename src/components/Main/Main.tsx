import { useState } from "react";
import CardList from "../Cardlist/Cardlist";
import Navbar from "../Navbar/Navbar";
import { Beer } from "../../Types/Types";
import "./Main.scss";

type MainProps = {
  beers: Beer[];
};

const Main = ({ beers }: MainProps) => {
 
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");


  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  
  const handleFilter = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  
  const filteredBeers = beers.filter((beer) => {
    const includesSearchQuery = beer.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    if (filter === "allBeers") {
      return includesSearchQuery;
    } else if (filter === "highAlcohol") {
      return includesSearchQuery && beer.abv > 6;
    } else if (filter === "classicRange") {
      const firstBrewedYear = parseInt(beer.first_brewed.split("/")[1], 10);
      return includesSearchQuery && firstBrewedYear < 2010;
    } else if (filter === "highAcidity") {
      return includesSearchQuery && beer.ph < 4;
    }

    return includesSearchQuery;
  });

  return (
    
    <div className="main">
      <Navbar onSearch={handleSearch} onFilter={handleFilter} />
      <div className="main__content">
        {filteredBeers.length > 0 ? (
          <CardList beers={filteredBeers} />
        ) : (
          <p className="main__error">No beers found with that name</p>
        )}
      </div>
    </div>
  );
};

export default Main;
