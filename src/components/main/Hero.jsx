//Dependencies
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [movies, SetMovies] = useState();

  useEffect(() => {
    getMostPopularMovies();
  }, []);

  const getMostPopularMovies = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b0dd442bf37e49eecbb517b186e6f5ee'
      )
      .then((res) => {
        // console.log(res.data.results);
        SetMovies(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section
      className="hero"
      style={{
        background: `url(https://image.tmdb.org/t/p/w500${
          movies && movies[0].poster_path
        })`,
      }}
    >
      <div className="container">HERO</div>
    </section>
  );
};

export default Hero;
