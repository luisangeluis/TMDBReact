//Components
import CardSeason from './CardSeason';

const SeasonsSection = ({ seasons }) => {
  return (
    <>
      <h3 className="subtitle-1 my-1 my-md-2">Seasons</h3>
      <div className="row">
        {seasons.map((season) => (
          <div className="col-6 col-lg-4" key={season.id}>
            <CardSeason season={season} key={season.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SeasonsSection;
