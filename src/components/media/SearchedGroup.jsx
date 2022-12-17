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
  const { ref, inView, entry } = useInView({ threshold: 0 });
  const myContainer = useRef();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const mediaType = localStorage.getItem('mediaType');
  const query = JSON.parse(localStorage.getItem('mediaByQuery'));

  useEffect(() => {
    // const pageNum = count - 1;
    // if (inView && pageNum <= 4) {
    //   addToCount();
    //   query.page = count;
    dispatch(getMediaByQuery(mediaType, query));
    //   console.log('innerHeight', window.innerHeight);
    //   console.log('posicion scroll', window.scrollY);
    // }
  }, []);

  const renderCards = () => {
    media.map((element, i) => {
      return (
        <div className="col-md-4 col-lg-3" key={element.id}>
          <CardMedia item={element} />
        </div>
        // <div>hola</div>
      );
    });
  };

  const addToCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="row searched-group">
      {
        media &&
          media.map((element, i) => (
            <div className="col-md-4 col-lg-3" key={element.id}>
              <CardMedia item={element} />
            </div>
          ))
        // renderCards()
      }
      {/* TODO REVISAR SI LO PUEDO PINTAR DESPUES DE LOS DEMAS O BUSCAR SEPARAR EL METODO PARA RENDERIZADO DINAMICO */}
      {media && <div className="hola"></div>}
    </div>
  );
};

export default SearchedGroup;
