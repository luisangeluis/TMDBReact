//Dependencies
import { useForm } from 'react-hook-form';

const InputFilterYear = ({ addQuery }) => {
  const { register, handleSubmit } = useForm();

  const sendQuerys = (data) => {
    console.log(data);
    const objeto = { primary_release_year: data.primary_release_year };
    addQuery(objeto);
  };
  return (
    <section className="row">
      <div className="col-12">
        <form
          className="my-4 my-md-0 text-bg-dark p-3 rounded"
          onSubmit={handleSubmit(sendQuerys)}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Search by year
            </label>
            <input
              type="text"
              className="form-control"
              id="by-year"
              aria-describedby="search-by-year"
              placeholder="2022"
              {...register('primary_release_year', { required: true })}
            />
            <div id="by-year_help" className="form-text ">
              Type the year to search example:2000.
            </div>
          </div>

          <button className="btn btn-secondary">Search</button>
        </form>
      </div>
    </section>
  );
};

export default InputFilterYear;
