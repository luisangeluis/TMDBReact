import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardMedia = ({ item }) => {
  let navigate = useNavigate();

  const goToDetail = () => {
    if (item.original_title) navigate(`/media-type/movie/id/${item.id}`);
    if (item.original_name) navigate(`/media-type/tv/id/${item.id}`);
  };

  return (
    <article className="card card-media justify-content-center border-1 rounded bg-light my-2">
      <button
        className="btn d-flex justify-content-center align-items-center p-0 "
        onClick={goToDetail}
      >
        <img
          src={
            item?.poster_path
              ? `https://image.tmdb.org/t/p/w500${item?.poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
          }
          alt=""
          className="img-fluid rounded w-100 p-1"
        />
      </button>
      <div className="card-body p-1 rounded d-flex justify-content-center align-items-start">
        <p className="card-title m-0 p-1 p-md-2 fw-bolder flex-grow-1 text-center">
          {item.title ? item.title : item.name}
        </p>
      </div>
    </article>
  );
};

export default CardMedia;
