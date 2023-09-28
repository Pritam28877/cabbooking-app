import React from "react";

const AutoComplete = () => {
  return (
    <div className="mt-5">
      <div>
        <label htmlFor="" className="text-gray-100">
          Where From?
        </label>
        <input
          type="text"
          placeholder="Where From?"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mt-3">
        <label htmlFor="" className="text-gray-100">
          Where To?
        </label>
        <input
          type="text"
          placeholder="Where To?"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
};

export default AutoComplete;
