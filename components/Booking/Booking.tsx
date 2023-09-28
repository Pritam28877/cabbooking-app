'use client'
import React, { useEffect, useState } from "react";
import AutoComplete from "./AutoComplete";

const Booking = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenHeight(window.innerHeight * 0.72);
    }
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-[20px] font-semibold">Booking</h1>
      <div className="border-[1px] p-5 rounded-md">
        <AutoComplete />
      </div>
    </div>
  );
};

export default Booking;
