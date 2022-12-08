import React from 'react';

const CardSeason = ({ season }) => {
  return (
    <article className="card justify-content-center border-1 rounded bg-light my-2">
      <button className="btn p-0">
        <div className="row">
          <div className=" col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${season?.poster_path}`}
              alt=""
              className="img-fluid rounded w-100 p-1 h-100"
            />
          </div>
          <div className=" col-md-8">
            <button className="btn d-flex justify-content-center align-items-center p-0">
              <div className="card-body p-1 rounded d-flex justify-content-center align-items-start">
                <div className="card-title m-0 p-1 p-md-2 fw-bolder">
                  {season?.name}
                </div>
              </div>
            </button>
          </div>
        </div>
      </button>
    </article>
  );
};

export default CardSeason;
