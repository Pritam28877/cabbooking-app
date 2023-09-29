"use client ";
import React, { useEffect, useState } from "react";

const AutoComplete = () => {
  const [address, setAddress] = useState<any>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  useEffect(() => {
    getAdress();
  }, [address]);

  const getAdress = async () => {
    const response = await fetch("/api/search-address?q=" + address);
    const data = await response.json();
    console.log(data);
    setSuggestions(data);
  };
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
          onChange={(e: any) => setAddress(e.target.value)}
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
