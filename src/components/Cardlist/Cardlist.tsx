
import React from 'react';
import Card from '../Card/Card';
import { Beer } from '../../Types/Types';

type CardListProps = {
  beers: Beer[];
}

const CardList = ({ beers }: CardListProps) => {
  return (
    <div className="card-list">
      {beers.map((beer) => (
        <Card key={beer.id} beer={beer} />
      ))}
    </div>
  );
};

export default CardList;
