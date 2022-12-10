import React from 'react';
import { useParams } from 'react-router-dom';
//Custom hooks
import useGetSeasonDetail from '../../../hooks/tv/useGetSeasonDetail';

const SeasonDetail = () => {
  const { tvId, seasonId } = useParams();
  const [seasonDetail] = useGetSeasonDetail(tvId, seasonId);
  return (
    <section className="season-detail">
      <div className="container"></div>
    </section>
  );
};

export default SeasonDetail;
