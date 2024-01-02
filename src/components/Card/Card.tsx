import { Link } from "react-router-dom";
import { Beer } from "../../Types/Types";
import "./Card.scss";

type CardProps = {
  beer: Beer;
};

const Card = ({ beer }: CardProps) => {
  return (
    <div className="card">
      {/* Displays the name of the beer */}
      <h2 className="card__title">{beer.name}</h2>

      {/* Displays the image of the beer */}
      <img className="card__image" src={beer.image_url} alt={beer.name} />

      {/* Displays the tagline of the beer */}
      <p className="card__tagline">{beer.tagline}</p>

      {/* Uses Link with a button to open beer details in a new tab */}
      <Link
        to={`/beer/${beer.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="card__link">
        Click for more details
      </Link>
    </div>
  );
};

export default Card;
