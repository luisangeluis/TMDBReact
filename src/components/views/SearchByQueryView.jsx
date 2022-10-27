//Depedencies
import { useSelector } from 'react-redux';

//Components
import SearchedGroup from '../media/SearchedGroup';

const SearchByQueryView = () => {
  const mediaByQuery = useSelector((state) => state.mediaByQuery);

  return (
    <section className="search-view">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-2">
            <InputFilterYear addQuery={addQuery} />
          </div> */}
          <div className="col-md-10">
            {/* {mediaByGenre && <SearchedGroup media={mediaByGenre} />} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchByQueryView;
