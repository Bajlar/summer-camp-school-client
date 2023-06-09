import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../../assets/images/logo/logo-small.png';

const Navbar = () => {

  const navItems = (
    <>
      <div className="md:flex justify-center items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/instructors">Instructors</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">
            <button className="btn text-lg text-white bg-[#04AA6D] hover:bg-[#04AA6D] capitalize border-0">
              Login
            </button>
          </Link>
        </li>
        <li>
          <Link to="/signUp">
            <button className="btn text-lg text-white bg-[#04AA6D] hover:bg-[#04AA6D] capitalize border-0">
              Sign Up
            </button>
          </Link>
        </li>
      </div>
    </>
  );

  return (
    <>
      <div className="navbar fixed top-0 z-10 bg-gray-400 text-white px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-60 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link>
            <img src={brandLogo} className="w-50 h-50 rounded-xl" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{navItems}</ul>
        </div>
      </div>
    </>

    // <nav className="bg-gray-800 text-white">
    //   <div className="container mx-auto flex justify-between items-center py-4">
    //     <div className="text-lg font-bold">

    //     </div>
    //     <div className="flex items-center space-x-4">
    //       <a href="/" className="hover:text-gray-300">
    //         Home
    //       </a>
    //       <a href="/instructors" className="hover:text-gray-300">
    //         Instructors
    //       </a>
    //       <a href="/classes" className="hover:text-gray-300">
    //         Classes
    //       </a>
    //       <a href="/dashboard" className="hover:text-gray-300">
    //         Dashboard
    //       </a>
    //       <div className="flex items-center">
    //         <div className="rounded-full w-8 h-8 bg-gray-300"></div>
    //         {/* Replace the above div with your user profile picture */}
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;