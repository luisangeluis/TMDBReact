//Depedencies
import { useSelector } from 'react-redux';

//Components
import SearchedGroup from '../media/SearchedGroup';

const SearchByQueryView = () => {
  const mediaByQuery = useSelector((state) => state.mediaByQuery);

  console.log(mediaByQuery);

  return (
    <section className="search-view">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-2">
            <InputFilterYear addQuery={addQuery} />
          </div> */}
          {/* filtros */}
          <div className="col-md-10">
            {mediaByQuery && <SearchedGroup media={mediaByQuery} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchByQueryView;
