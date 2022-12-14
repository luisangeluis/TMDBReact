//Dependencies
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const MainInputSearch = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const search = (data) => navigate(`/search/${data.search}`);

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
