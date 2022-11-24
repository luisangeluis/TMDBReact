//Dependencies
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailMovie = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState();

  console.log(detail);
  useEffect(() => {
    getDetailMovie();
  }, [id]);

  const getDetailMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US`
      )
      .then((res) => {
        console.log(res);
        setDetail(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="detail-media flex-grow-1">
      <div className="container">
        <div className="card my-2 my-md-3">
          <div className="row bg-light border border-1 rounded m-2 m-md-1">
            <div className=" col-md-5 d-flex justify-content-center align-items-center">
              <img
                src={`https://image.tmdb.org/t/p/original${detail?.poster_path}`}
                alt=""
                className="img-fluid detail_main-img my-1 my-md-2 w-100"
              />
            </div>
            <div className=" col-md-7 p-2">
              <article className="card-body  border-0 p-2 p-md-3">
                <h3 className="card-title">{detail?.title}</h3>
                <p className="card-text">{detail?.overview}</p>
              </article>
              <h3>Genres</h3>
              <ul className="list-group flex-row flex-wrap">
                {detail?.genres.map((genre) => {
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
        </div>
      </div>
    </section>
  );
};

export default DetailMovie;
