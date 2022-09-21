import React from 'react';

const CardMedia = ({ item }) => {
  // console.log(item);
  return (
    <article className="card">
      <img
        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
        alt=""
        className="img-fluid"
      />
      {/* <div className="card-body">
        <h3 className="card-title"></h3>
        <p className="card-text"></p>
      </div> */}
    </article>
  );
};

export default CardMedia;
