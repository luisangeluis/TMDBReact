import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardMedia = ({ item }) => {
  let navigate = useNavigate();

  const goToDetail = () => {
    console.log(item);

    console.log(item.media_type);
    if (item.original_title) navigate(`/movie/${item.id}`);
    if (item.original_name) navigate(`/tv/${item.id}`);
  };

  return (
    <article className="card justify-content-center border border-0">
      <button
        className="btn d-flex justify-content-center align-items-center"
        onClick={goToDetail}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
          className="img-fluid"
        />
      </button>
    </article>
  );
};

export default CardMedia;
