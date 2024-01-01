
import React from 'react';
import { Beer } from '../../Types/Types';
import './Card.scss';

type CardProps = {
  beer: Beer;
}

const Card = ({ beer }: CardProps) => {
  return (
    <div className="card">
      <img src={beer.image_url} alt={beer.name} className="card-image" />
      <div className="card-description">
        <h2>{beer.name}</h2>
        <p>{beer.description}</p>
      </div>
    </div>
  );
};

export default Card;
