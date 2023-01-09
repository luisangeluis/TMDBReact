import React from 'react';

const Loader = () => {
  return (
    <section className="loader ">
      <div className="container ">
        <div className="text-center">
          <div
            className="spinner-grow"
            style={{ width: '3rem', height: '3rem' }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
