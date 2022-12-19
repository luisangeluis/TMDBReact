//Depedencies
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { useHref } from 'react-router-dom';
//Slices
import { getMediaByQuery } from '../../store/slices/mediaByQuery.slice';
//Components
import CardMedia from './CardMedia';

const SearchedGroup = ({ media }) => {
  const [pageNum, setPageNum] = useState(2);
  const { ref, inView, entry } = useInView({ threshold: 0 });
  const dispatch = useDispatch();
  const mediaType = localStorage.getItem('mediaType');
  const myQuery = JSON.parse(localStorage.getItem('mediaByQuery'));

  // useEffect(() => {
  //   if (inView) {
  //     addCount();
  //     let page = pageNum - 1;
  //     console.log({ page });
  //     myQuery.page = page;
  //     dispatch(getMediaByQuery(mediaType, myQuery));
  //   }
  // }, [inView]);

  const addCount = () => {
    setPageNum(pageNum + 1);
  };

  const renderCards = () => {
    // console.log(media.length - 1);
    const cards = media.map((element, i) => {
      if (i == media.length - 1) {
        return (
          <div
            className="col-md-4 col-lg-3 opcion-a"
            key={element.id}
            ref={ref}
          >
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
