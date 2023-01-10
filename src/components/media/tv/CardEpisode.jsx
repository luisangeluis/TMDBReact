import React from 'react';

const CardEpisode = ({ episode }) => {
  return (
    <article className="card card-episode my-2 my-md-3">
      <div className="row">
        <div className="col-md-4">
          <img
            src={
              episode?.still_path
                ? `https://image.tmdb.org/t/p/w500${episode?.still_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
            }
            alt=""
            className="img-fluid rounded w-100 p-1 h-100"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5>Episode name: {episode?.name}</h5>
            <p className="card-text">{episode?.overview}</p>
            <p className="card-subtitle text-muted fw-bold">
              Air date: {episode?.air_date}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default CardEpisode;
