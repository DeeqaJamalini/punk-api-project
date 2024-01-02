
import { useEffect, useState } from 'react';
import Main from './components/Main/Main';
import { Beer } from './Types/Types';
import BeerDetail from './components/BeerDetail/BeerDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

const App = () => {
  // State variable to store the list of beers
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    // Fetch beer data from the Punk API when the component mounts
    const fetchBeers = async () => {
      try {
        const response = await fetch('https://api.punkapi.com/v2/beers');
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        // Log an error message if there's an issue fetching beer data
        console.error('Error fetching beer data:', error);
      }
    };

    fetchBeers();
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
        <Route
          path="/beer/:id"
          element={<BeerDetail beers={beers} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
