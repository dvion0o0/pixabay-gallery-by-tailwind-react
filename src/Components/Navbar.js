import React from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="w-full bg-blue-300 py-4">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <h1 className="text-blue-700 text-3xl font-semibold font-mono cursor-pointer">
          Pixabay
        </h1>
        <FaBars className="text-2xl text-gray-500 cursor-pointer transition-all delay-1000 ease-linear hover:text-blue-700 " />
      </div>
    </nav>
  );
};

export default Navbar;
