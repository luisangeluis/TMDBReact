//Dependencies
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//Slices
import { isLoading } from '../../store/slices/loader.slice';
//Custom hooks
import useGetDetailMedia from '../../hooks/useGetDetailMedia';
import Loader from '../shared/Loader';
//Components
import SimilarMedia from './SimilarMedia';
import SeasonsSection from './tv/SeasonsSection';

const DetailMedia = () => {
  const { type, id } = useParams();
  const dispatch = useDispatch();
  const [detailMedia] = useGetDetailMedia(type, id);
  const isLoad = useSelector((state) => state.loader);

  useEffect(() => {
    if (detailMedia) dispatch(isLoading(false));
    else dispatch(isLoading(true));
  }, [detailMedia]);

  console.log(detailMedia);
  return (
    <section className="detail-media flex-grow-1 margin-top_main">
      {isLoad && <Loader />}
      <div className="container">
        <article className="card main-card my-2 my-md-3">
          <div className="row rounded m-2 m-md-1">
            <div className=" col-md-5 d-flex justify-content-center align-items-center">
              <img
                src={`https://image.tmdb.org/t/p/original${detailMedia?.poster_path}`}
                alt=""
                className="img-fluid detail_main-img my-1 my-md-2 w-100 rounded"
              />
            </div>
            <div className=" col-md-7 p-2">
              <article className="card-body  border-0 p-2 p-md-3">
                <h3 className="card-title">
                  {detailMedia?.title ? detailMedia?.title : detailMedia?.name}
                </h3>
                <p className="card-text">{detailMedia?.overview}</p>
              </article>
              <h3 className="px-2 px-md-3 m-0">Genres</h3>
              <ul className="list-group flex-row flex-wrap p-2 p-md-3">
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
              {type === 'tv' && (
                <>
                  <h3 className="px-2 px-md-3">Available in:</h3>
                  <ul className="list-group flex-row flex-wrap px-2 px-md-3 fw-bold text-white">
                    {detailMedia?.networks.map((network) => {
                      return <li key={network.name}>{network.name}</li>;
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
        </article>

        {detailMedia?.seasons !== undefined && (
          <SeasonsSection seasons={detailMedia.seasons} />
        )}
        <SimilarMedia mediaType={type} mediaId={id} />
      </div>
    </section>
  );
};

export default DetailMedia;
