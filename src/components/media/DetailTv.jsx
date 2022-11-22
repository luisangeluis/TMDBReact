//Dependencies
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailTv = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState();

  console.log(detail);
  useEffect(() => {
    getDetailTv();
  }, [id]);

  const getDetailTv = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US`
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
            <div className="row bg-light border border-2 rounded m-2 m-md-3">
              <div className=" col-md-5 d-flex justify-content-center align-items-center">
                <article className="card align-items-center border-0">
                  <img
                    src={`https://image.tmdb.org/t/p/original${detail?.poster_path}`}
                    alt=""
                    className="img-fluid detail_main-img "
                  />
                </article>
              </div>
              <div className=" col-md-7">
                <article className="card p-2 p-md-3 border-0 m-2 m-md-3 ">
                  <h3 className="card-title">{detail?.name}</h3>
                  <p className="card-text">
                    {detail?.overview ? detail.overview : 'Without descriptión'}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailTv;
