import { useEffect, useState } from "react";
import Main from "./components/Main/Main";
import { Beer } from "./Types/Types";
import BeerDetail from "./components/BeerDetail/BeerDetail";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

const App = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const perPage = 80;
        let allBeers: Beer[] = [];

        let response = await fetch(
          `https://api.punkapi.com/v2/beers?page=1&per_page=${perPage}`
        );
        let data = await response.json();
        allBeers = [...allBeers, ...data];

        let page = 2;
        while (allBeers.length < 300 && data.length === perPage) {
          response = await fetch(
            `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
          );
          data = await response.json();
          allBeers = [...allBeers, ...data];
          page++;
        }

        setBeers(allBeers);
      } catch (error) {
        console.error("Error fetching beer data:", error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Main beers={beers} />
            </div>
          }
        />

        <Route path="/beer/:id" element={<BeerDetail beers={beers} />} />
      </Routes>
    </Router>
  );
};

export default App;
