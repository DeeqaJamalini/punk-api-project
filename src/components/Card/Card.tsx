import { Link } from "react-router-dom";
import { Beer } from "../../Types/Types";
import "./Card.scss";

type CardProps = {
  beer: Beer;
};

const Card = ({ beer }: CardProps) => {
  return (
    <div className="card">
     
      <h2 className="card__title">{beer.name}</h2>

      
      <img className="card__image" src={beer.image_url} alt={beer.name} />

      
      <p className="card__tagline">{beer.tagline}</p>

      
      <Link to={`/beer/${beer.id}`} className="card__link">
        Click for more details
      </Link>
    </div>
  );
};

export default Card;
