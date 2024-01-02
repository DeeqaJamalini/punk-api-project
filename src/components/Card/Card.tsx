
import { Link } from 'react-router-dom';
import { Beer } from '../../Types/Types';

type CardProps = {
  beer: Beer;
};

const Card = ({ beer }: CardProps) => {
  return (
    <div className="card">
      {/* Displays the name of the beer */}
      <h2>{beer.name}</h2>

      {/* Displays the image of the beer */}
      <img src={beer.image_url} alt={beer.name} />

      {/* Displays the tagline of the beer */}
      <p>{beer.tagline}</p>

      {/* Uses Link with a button to open beer details in a new tab */}
      <Link to={`/beer/${beer.id}`} target="_blank" rel="noopener noreferrer">
        <button>Click for More Info</button>
      </Link>
    </div>
  );
}

export default Card;
