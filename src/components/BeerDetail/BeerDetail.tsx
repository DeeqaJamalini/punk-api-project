import { useParams } from "react-router-dom";
import { Beer } from "../../Types/Types";
import "./BeerDetail.scss";

type BeerDetailProps = {
  beers: Beer[];
};

const BeerDetail = ({ beers }: BeerDetailProps) => {
  
  const { id } = useParams<{ id: string }>();

  
  const selectedBeer = beers.find((beer) => beer.id.toString() === id);

  
  if (!selectedBeer) {
    return <div>Beer not found</div>;
  }

  const handleReturn = () => {
    history.go(-1); 
  };
  

  return (
    <div className="beer-detail">
      <div className="beer-detail__content">
        <h1 className="beer-detail__name">{selectedBeer.name}</h1>
        <img
          className="beer-detail__image"
          src={selectedBeer.image_url}
          alt={selectedBeer.name}
        />

        <p className="beer-detail__detail">{selectedBeer.description}</p>
        <p className="beer-detail__detail">
          FIRST BREWED: {selectedBeer.first_brewed}
        </p>
        <p className="beer-detail__detail">ABV: {selectedBeer.abv}</p>
        <p className="beer-detail__detail">PH: {selectedBeer.ph}</p>
        <p className="beer-detail__detail">
          ATTENUATION LEVEL: {selectedBeer.attenuation_level}
        </p>
        <p className="beer-detail__detail">
          INGREDIENTS: {selectedBeer.ingredients.yeast}
        </p>
        <p className="beer-detail__detail">
          FOOD PAIRING: {selectedBeer.food_pairing}
        </p>
        <p className="beer-detail__detail">
          BREWERS TIPS: {selectedBeer.brewers_tips}
        </p>
        
        <button className="beer-detail__button" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default BeerDetail;
