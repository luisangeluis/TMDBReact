import React from 'react';
import Hero from './Hero';

const Home = () => {
  return (
    <section className="home flex-grow-1">
      <div className="container ">
        <div className="col-12 ">
          <Hero />
        </div>
      </div>
    </section>
  );
};

export default Home;
