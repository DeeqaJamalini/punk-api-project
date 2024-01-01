
import React from 'react';
import CardList from '../Cardlist/Cardlist'; // Adjust the path based on your project structure
import { Beer } from '../../Types/Types';

type MainProps = {
  beers: Beer[];
}

const Main = ({ beers }: MainProps) => {
  return (
    <div className="main-component">
      <h1>Main Component</h1>
      <CardList beers={beers} />
    </div>
  );
};

export default Main;
