import React from 'react';

const Error404 = () => {
  return (
    <section className="container error-404 flex-grow-1 d-flex justify-content-center align-items-center my-2 my-md-3 bg-dark rounded">
      <div className="row">
        <div className="col-12">
          <article className="card m-2 m-md-3">
            <div className="card-body">
              <h2 className="card-title">Error: 404</h2>
              <p className="card-text">Page not found.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Error404;
