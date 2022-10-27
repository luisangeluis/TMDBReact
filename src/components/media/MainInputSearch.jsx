//Dependencies
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit(search)}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control w-50"
          aria-describedby="typeSearch"
          placeholder="Type your search"
          {...register('search', { required: true })}
        />
        <button className="btn">Search</button>
      </div>
    </form>
  );
};

export default MainInputSearch;
