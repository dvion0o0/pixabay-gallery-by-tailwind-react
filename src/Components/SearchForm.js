import React from "react";
import { useGlobalContext } from "../ContextAPI/Context";
const SearchForm = () => {
  const { value, setValue, handleSubmit } = useGlobalContext();
  return (
    <div className="my-12 flex justify-center  max-w-screen-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="py-2 px-2  md:w-96 text-indigo-400 text-lg font-bold border-b-2 border-blue-700 outline-none placeholder-blue-700"
        />
      </form>
    </div>
  );
};

export default SearchForm;
