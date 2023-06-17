import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../../assets/images/logo/logo-small.png';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import useTheme from '../../../hooks/useTheme';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { isDarkMode, handleDarkMode } = useTheme();

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <div className="md:flex justify-center items-center">
        <li className="hover:bg-gray-100 text-white font-medium rounded-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-gray-100 text-white font-medium rounded-lg">
          <Link to="/instructors">Instructors</Link>
        </li>
        <li className="hover:bg-gray-100 text-white font-medium rounded-lg">
          <Link to="/classes">Classes</Link>
        </li>
        {user && (
          <li className="hover:bg-gray-100 text-white font-medium rounded-lg">
            <Link
              to={`${
                isAdmin
                  ? "/dashboard/manageUsers"
                  : isInstructor
                  ? "/dashboard/addClass"
                  : "/dashboard/mySelectedClass"
              }`}
            >
              Dashboard
            </Link>
          </li>
        )}

        <div>
          {user ? (
            <div className="flex justify-center items-center gap-4">
              {/* <p className="text-lg">{user?.displayName}</p> */}
              {/* <p className="text-lg">{user?.email}</p> */}
              <div className="avatar placeholder">
                <div className="text-neutral-content rounded-full w-12">
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="btn text-lg text-white bg-[#04AA6D] hover:bg-[#04AA6D] capitalize border-0"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <button className="btn text-lg text-white bg-[#04AA6D] hover:bg-[#04AA6D] capitalize border-0">
                    Login
                  </button>
                </Link>
              </li>
            </>
          )}
        </div>
      </div>
      <div className="ml-4">
        <button
          onClick={handleDarkMode}
          className={`${
            isDarkMode
              ? "p-3 rounded-full bg-white"
              : "p-3 rounded-full bg-black"
          }`}
        >
          {!isDarkMode ? (
            <BsFillMoonStarsFill className="h-6 w-6 text-white" />
          ) : (
            <BsFillSunFill className="h-6 w-6 text-black" />
          )}
        </button>
      </div>
    </>
  );

  return (
    <>
      <div
        className={`navbar fixed top-0 z-10 ${
          isDarkMode ? "bg-black" : "bg-gray-600 bg-opacity-30"
        } text-white px-12`}
      >
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
  );
};

export default Navbar;