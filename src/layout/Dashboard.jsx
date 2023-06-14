import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const isAdmin = true;
  // const [isAdmin] = useAdmin();

  return (
    <div>
       <Helmet>
        <title>Cricket academy | Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-72 h-full bg-[#e0b36f]">
            <h3 className="text-2xl font-black pl-4 mb-4 uppercase">
              Cricket Academy
            </h3>
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/manageUsers">
                    <FaHome className="text-2xl"></FaHome>Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/instructor">
                    <FaUserTie className="text-2xl"></FaUserTie>Instructor
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClasses">
                    <FaUsers className="text-2xl"></FaUsers>My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome className="text-2xl"></FaHome>User Home
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome className="text-2xl"></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructors">
                <FaUserTie className="text-2xl"></FaUserTie>Instructors
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <FaUsers className="text-2xl"></FaUsers>Classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
