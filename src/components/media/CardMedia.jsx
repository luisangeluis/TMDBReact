import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardMedia = ({ item }) => {
  let navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <article className="card">
      <button
        className="btn d-flex justify-content-center align-items-center"
        onClick={goToDetail}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          alt=""
          className="img-fluid"
        />
      </button>
    </article>
  );
};

export default CardMedia;
