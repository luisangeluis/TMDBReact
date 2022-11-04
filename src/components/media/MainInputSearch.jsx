//Dependencies
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//Slices
import { getMediaByName } from '../../store/slices/mediaByQuery.slice';

const MainInputSearch = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const search = (data) => {
    // console.log(data);
    // navigate(`/search/${data.search}`);
    dispatch(getMediaByName(data.search));
    navigate(`/search-query`);
  };

  return (
    <form onSubmit={handleSubmit(search)} className="row g-3">
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          aria-describedby="typeSearch"
          placeholder="Type your search"
          {...register('search', { required: true })}
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-secondary">Search</button>
      </div>
    </form>
  );
};

export default MainInputSearch;
