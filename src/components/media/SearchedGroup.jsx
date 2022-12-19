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
  let count = 0;

  const renderCards = () => {
    console.log(media.length - 1);
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

  if (inView) {
    console.log('hola');
  }

  return (
    <div className="row searched-group">
      {renderCards()}
      {/* TODO REVISAR SI LO PUEDO PINTAR DESPUES DE LOS DEMAS O BUSCAR SEPARAR EL METODO PARA RENDERIZADO DINAMICO */}
    </div>
  );
};

export default SearchedGroup;
