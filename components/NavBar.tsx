import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <div>
        <Image src="/Book.png" alt="" width={120} height={60} />
      </div>
      <div className="flex">
        <h1>home</h1>
        <h1>History</h1>
        <h1>Help</h1>
      </div>
    </div>
  );
};

export default NavBar;
