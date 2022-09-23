import React from 'react';
import { useForm } from 'react-hook-form';

const MainSearch = () => {
  const search = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(search)}>
      <div class="mb-3">
        <input
          type="email"
          className="form-control w-50"
          id="exampleInputEmail1"
          aria-describedby="typeSearch"
          placeholder="Type your search"
        />
        <button className="btn">Search</button>
      </div>
    </form>
  );
};

export default MainSearch;
