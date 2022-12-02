//Dependencies
import { useState } from 'react';
import { useParams } from 'react-router-dom';
//Custom hooks
import useGetDetailMedia from '../../hooks/useGetDetailMedia';
import SimilarMedia from './SimilarMedia';

const DetailMedia = () => {
  const { type, id } = useParams();
  const [detailMedia] = useGetDetailMedia(type, id);

  console.log(detailMedia);
  return (
    <section className="detail-media flex-grow-1">
      <div className="container">
        <article className="card my-2 my-md-3">
          <div className="row bg-light border border-1 rounded m-2 m-md-1">
            <div className=" col-md-5 d-flex justify-content-center align-items-center">
              <img
                src={`https://image.tmdb.org/t/p/original${detailMedia?.poster_path}`}
                alt=""
                className="img-fluid detail_main-img my-1 my-md-2 w-100"
              />
            </div>
            <div className=" col-md-7 p-2">
              <article className="card-body  border-0 p-2 p-md-3">
                <h3 className="card-title">{detailMedia?.title}</h3>
                <p className="card-text">{detailMedia?.overview}</p>
              </article>
              <h3>Genres</h3>
              <ul className="list-group flex-row flex-wrap">
                {detailMedia?.genres.map((genre) => {
                  return (
                    <li
                      className="list-group-item rounded-0 border border-1"
                      key={genre.name}
                    >
                      {genre.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </article>
        <SimilarMedia mediaType={type} mediaId={id} />
      </div>
    </section>
  );
};

export default DetailMedia;
