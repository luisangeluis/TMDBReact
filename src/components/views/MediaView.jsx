import React from 'react';
import { useLocation } from 'react-router-dom';

const MediaView = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <section className="media-view">
      <div className="container">
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
    </section>
  );
};

export default MediaView;
