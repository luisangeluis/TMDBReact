import React from 'react';
import { useParams } from 'react-router-dom';
//Custom hooks
import useGetSeasonDetail from '../../../hooks/tv/useGetSeasonDetail';
//Components
import CardEpisode from './CardEpisode';

const SeasonDetail = () => {
  const { tvId, seasonId } = useParams();
  const [seasonDetail] = useGetSeasonDetail(tvId, seasonId);
  console.log(seasonDetail);
  return (
    <section className="season-detail flex-grow-1 margin-top_main">
      <div className="container">
        <div className="row">
          <h3> SEASON NAME: {seasonDetail?.name}</h3>
          <div className="col-12">
            {seasonDetail?.episodes &&
              seasonDetail?.episodes.map((episode) => {
                return <CardEpisode episode={episode} key={episode.id} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonDetail;
