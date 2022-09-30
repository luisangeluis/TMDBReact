//Components
import CardMedia from './CardMedia';

const SearchedGroup = ({ media }) => {
  return (
    <div className="row">
      {media &&
        media.map((element) => (
          <div className="col-md-4 col-lg-3" key={element.id}>
            <CardMedia item={element} />
          </div>
        ))}
    </div>
  );
};

export default SearchedGroup;
