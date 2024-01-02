// BeerDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Beer } from '../../Types/Types';

type BeerDetailProps = {
  beers: Beer[];
};

const BeerDetail = ({ beers }: BeerDetailProps) => {
  const { id } = useParams<{ id: string }>();

  const selectedBeer = beers.find((beer) => beer.id.toString() === id);

  if (!selectedBeer) {
    return <div>Beer not found</div>;
  }

  return (
    <div className="beer-detail">
      <h1>{selectedBeer.name}</h1>
        <img src={selectedBeer.image_url} alt={selectedBeer.name} />
        <p>{selectedBeer.tagline}</p>
        <p>{selectedBeer.description}</p>
        <p>{selectedBeer.first_brewed}</p>
        <p>{selectedBeer.abv}</p>
        <p>{selectedBeer.ph}</p>
        <p>{selectedBeer.attenuation_level}</p>
        <p>{selectedBeer.volume.value}</p>
        <p>{selectedBeer.volume.unit}</p>
        <p>{selectedBeer.ingredients.yeast}</p>
        <p>{selectedBeer.food_pairing}</p>
        <p>{selectedBeer.brewers_tips}</p>
       

      {/* Display additional details about the beer */}
    </div>
  );
};

export default BeerDetail;
