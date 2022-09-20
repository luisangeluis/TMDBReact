const Hero = ({ movies }) => {
  return (
    <section
      className="hero"
      style={{
        background: `url(https://image.tmdb.org/t/p/original${
          movies && movies[0].poster_path
        }) center/cover`,
      }}
    >
      <div className="container"></div>
    </section>
  );
};

export default Hero;
