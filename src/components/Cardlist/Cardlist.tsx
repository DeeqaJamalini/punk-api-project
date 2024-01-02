
import Card from '../Card/Card';
import { Beer } from '../../Types/Types';

type CardListProps = {
  beers: Beer[];
};

const CardList = ({ beers }: CardListProps) => {
  return (
    // Container for the list of beer cards
    <div className="card-list">
      {/* Maps through the array of beers and uses the unique 'id' of each beer as the 'key' prop */}
      {beers.map((beer) => (
        // Each Card component represents a beer in the list
        <Card key={beer.id} beer={beer} />
      ))}
    </div>
  );
};

export default CardList;
