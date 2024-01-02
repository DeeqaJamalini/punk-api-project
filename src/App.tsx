import { useEffect, useState } from "react";
import Main from "./components/Main/Main";
import { Beer } from "./Types/Types";
import BeerDetail from "./components/BeerDetail/BeerDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

const App = () => {
  // State variable to store the list of beers
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    // Effect to fetch beer data from the Punk API when the component mounts

    const fetchBeers = async () => {
      try {
        // Fetch beer data from the Punk API
        const response = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80");
        const data = await response.json();
        
        // Set the retrieved beer data in the state
        setBeers(data);
      } catch (error) {
        // Log an error message if there's an issue fetching beer data
        console.error("Error fetching beer data:", error);
      }
    };

    // Invoke the fetchBeers function when the component mounts
    fetchBeers();

    // The empty dependency array ensures that this effect runs only once when the component mounts
  }, []);

  return (
    // Router component for managing navigation and rendering different components based on the route
    <Router>
      {/* Routes component defines the different routes and their corresponding components */}
      <Routes>
        {/* Route for the main page */}
        <Route
          path="/"
          element={
            <div className="app">
              {/* Main component displaying the list of beers */}
              <Main beers={beers} />
            </div>
          }
        />
        {/* Route for displaying details of a specific beer */}
        <Route path="/beer/:id" element={<BeerDetail beers={beers} />} />
      </Routes>
    </Router>
  );
};

export default App;
