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
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className=" col-md-4">
                <article className="card align-items-center border-0">
                  <img
                    src={`https://image.tmdb.org/t/p/original${detail?.poster_path}`}
                    alt=""
                    className="img-fluid detail_main-img "
                  />
                </article>
              </div>
              <div className=" col-md-8">
                <article className="card">
                  <h3 className="card-title">{detail?.title}</h3>
                  <p className="card-text">{detail?.overview}</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailMovie;
