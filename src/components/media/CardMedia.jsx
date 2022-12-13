import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardMedia = ({ item }) => {
  let navigate = useNavigate();
  // console.log(item);
  const goToDetail = () => {
    // console.log(item);

    // console.log(item.media_type);
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
          src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
          alt=""
          className="img-fluid rounded w-100 p-1"
        />
      </button>
      <div className="card-body p-1 rounded d-flex justify-content-center align-items-start">
        <p className="card-title m-0 p-1 p-md-2 fw-bolder">
          {item.title ? item.title : item.name}
        </p>
      </div>
    </article>
  );
};

export default CardMedia;
