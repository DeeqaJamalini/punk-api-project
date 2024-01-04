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
       
        const response = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80");
        const data = await response.json();
        
        
        setBeers(data);
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
