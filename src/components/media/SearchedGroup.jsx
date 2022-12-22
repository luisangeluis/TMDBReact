//Depedencies
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Slices
import { getMediaByQuery } from '../../store/slices/mediaByQuery.slice';
//Components
import CardMedia from './CardMedia';

const SearchedGroup = ({ media }) => {
  const dispatch = useDispatch();
  const mediaType = localStorage.getItem('mediaType');
  const myQuery = JSON.parse(localStorage.getItem('mediaByQuery'));

  const renderCards = () => {
    const cards = media.map((element, i) => {
      if (i == media.length - 1) {
        return (
          <div className="col-md-4 col-lg-3 opcion-a" key={element.id}>
            <CardMedia item={element} />
          </div>
        );
      } else {
        return (
          <div className="col-md-4 col-lg-3 opcion-b" key={element.id}>
            <CardMedia item={element} />
          </div>
        );
      }
    });
    return cards;
  };

  return <div className="row searched-group">{renderCards()}</div>;
};

export default SearchedGroup;
