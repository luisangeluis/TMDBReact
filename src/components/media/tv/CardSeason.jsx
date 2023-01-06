//Depedencies
import { useNavigate, useParams } from 'react-router-dom';

const CardSeason = ({ season }) => {
  // console.log(season);
  const { id } = useParams();
  let navigate = useNavigate();

  const goToDetailSeason = () => {
    navigate(`/tv/${id}/season/${season.season_number}/season-detail`);
  };

  return (
    <article className="card card-season justify-content-center border-1 rounded bg-light my-2">
      <button className="btn p-0" onClick={goToDetailSeason}>
        <div className="row">
          <div className=" col-md-4">
            <img
              src={
                season?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${season?.poster_path}`
                  : '/src/assets/images/no-image.png'
              }
              alt=""
              className="img-fluid rounded w-100 p-1 h-100"
            />
          </div>
          <div className=" col-md-8">
            {/* <button className="btn d-flex justify-content-center align-items-center p-0"> */}
            <div className="card-body p-1 rounded text-start d-flex justify-content-between align-items-start flex-column">
              <div className="card-title m-0 p-1 p-md-2 fw-bolder">
                {season?.name}
              </div>
              <div className="card-text">
                Number of episodes: {season?.episode_count}
              </div>
              <div className="card-subtitle text-muted fw-bold">
                {' '}
                air date: {season?.air_date}
              </div>
            </div>
            {/* </button> */}
          </div>
        </div>
      </button>
    </article>
  );
};

export default CardSeason;
