//Components
import CardSeason from './CardSeason';

const SeasonsSection = ({ seasons }) => {
  return (
    <>
      <h3>Seasons</h3>
      <div className="row">
        {seasons.map((season) => (
          <div className="col-6 col-lg-4">
            <CardSeason season={season} key={season.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SeasonsSection;
