//Depedencies
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Hooks
import useGetMediaByQuerySection from '../../hooks/useGetMediaByQuerySection';
//Slices
//Components
import SwiperCarousel from './SwiperCarousel';

const MediaByQuerySection = ({ mediaType, query, subtitle }) => {
  const [media] = useGetMediaByQuerySection(mediaType, query);
  let navigate = useNavigate();
  const [isEnd, setIsEnd] = useState();

  const goToGenre = () => {
    localStorage.clear();
    localStorage.setItem('mediaType', mediaType);
    localStorage.setItem('mediaByQuery', JSON.stringify(query));
    navigate(`/search-query/title/${subtitle}`);
  };

  return (
    <>
      <section className="media-section my-5">
        <div className="container p-2 p-md-3 rounded">
          <div className="d-flex justify-content-between my-0">
            <h3 className="text-white m-0 subtitle-1">{subtitle}</h3>
            <button
              className={`btn btn-animation-1 btn-secondary fw-bold`}
              onClick={goToGenre}
            >
              <div
                className={`alert btn_alert m-0 d-flex justify-content-center align-items-center  ${
                  isEnd ? 'left-0' : ''
                }`}
                role="alert"
              >
                Go to all <i className="fa-solid fa-arrow-right p-1"></i>
              </div>
              {`Go to ${subtitle}`}
            </button>
          </div>
          {media && <SwiperCarousel mediaItems={media} isEnd={setIsEnd} />}
        </div>
      </section>
    </>
  );
};

export default MediaByQuerySection;
