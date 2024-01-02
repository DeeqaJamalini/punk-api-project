
import { useParams } from 'react-router-dom';
import { Beer } from '../../Types/Types';

type BeerDetailProps = {
  beers: Beer[];
};

const BeerDetail = ({ beers }: BeerDetailProps) => {
  // Extracts the beer ID from the URL parameters
  const { id } = useParams<{ id: string }>();

  // Finds the selected beer based on the ID
  const selectedBeer = beers.find((beer) => beer.id.toString() === id);

  // If the selected beer is not found, displays an error message
  if (!selectedBeer) {
    return <div>Beer not found</div>;
  }

  return (
    <div className="beer-detail">
      {/* Display the name of the selected beer */}
      <h1>{selectedBeer.name}</h1>
      
      {/* Display the image of the selected beer */}
      <img src={selectedBeer.image_url} alt={selectedBeer.name} />
      
      {/* Display the tagline, description, and other details of the selected beer */}
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
      
    </div>
  );
};

export default BeerDetail;
