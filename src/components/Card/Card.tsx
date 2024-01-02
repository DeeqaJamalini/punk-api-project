// Card.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Beer } from '../../Types/Types';

type CardProps = {
  beer: Beer;
};

const Card = ({ beer }: CardProps) => {
  return (
    <div className="card">
      <h2>{beer.name}</h2>
        <img src={beer.image_url} alt={beer.name} />
      <p>{beer.tagline}</p>
      {/* Use Link with a button to open beer details in a new tab */}
      <Link to={`/beer/${beer.id}`} target="_blank" rel="noopener noreferrer">
        <button>Click for More Info</button>
      </Link>
    </div>
  );
}

export default Card;
