//Depedencies
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
//Slices
import { addMediaByQuery } from '../../store/slices/mediaByQuery.slice';
//Components
import CardMedia from './CardMedia';

const SearchedGroup = ({ media }) => {
  const { ref, inView, entry } = useInView({ threshold: 0 });
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const mediaType = localStorage.getItem('mediaType');
  const query = JSON.parse(localStorage.getItem('mediaByQuery'));

  useEffect(() => {
    if (inView) {
      setCount(count + 1);
      console.log({ count });
      console.log(dispatch(getMediaByQuery(mediaType, query)));
    }
  }, [inView]);

  return (
    <div className="row searched-group">
      {media &&
        media.map((element) => (
          <div className="col-md-4 col-lg-3" key={element.id}>
            <CardMedia item={element} />
          </div>
        ))}
      <div className="hola" ref={ref}></div>
    </div>
  );
};

export default SearchedGroup;
