//Dependencies
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const MainInputSearch = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const search = (data) => {
    localStorage.clear();
    navigate(`/search/${data.search}`);
  };

  return (
    <form onSubmit={handleSubmit(search)} className=" ">
      <div className="col-auto d-flex flex-nowrap">
        <input
          type="text"
          className="form-control"
          aria-describedby="typeSearch"
          placeholder="Type your search"
          {...register('search', { required: true })}
        />
        <button className="btn btn-secondary border border-1 text-nowrap">
          Search
        </button>
      </div>
      {/* <div className="col-auto">
        <button className="btn btn-secondary border border-1">Search</button>
      </div> */}
    </form>
  );
};

export default MainInputSearch;
