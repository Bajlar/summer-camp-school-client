import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaAddressCard, FaHome, FaUserPlus, FaUserShield, FaUserTie, FaUsers } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {

  const [isAdmin] = useAdmin();

  const [isInstructor] = useInstructor();

  return (
    <div>
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

          <ul className="menu h-full  bg-[#D1A054]">
            <h3 className="text-2xl font-black pl-4 mb-4 uppercase">
              Cricket Academy
            </h3>
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/manageUsers">
                    <FaUserShield className="text-2xl"></FaUserShield>Manage
                    Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageClasses">
                    <MdClass className="text-2xl"></MdClass>Manage Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {isInstructor ? (
                  <>
                    <li>
                      <NavLink to="/dashboard/addClass">
                        <FaAddressCard className="text-2xl"></FaAddressCard>Add
                        Class
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
                      <NavLink to="/dashboard/mySelectedClass">
                        <FaUsers className="text-2xl"></FaUsers>My Selected
                        Class
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/myEnrolledClasses">
                        <FaUserPlus className="text-2xl"></FaUserPlus>
                        My Enrolled Classes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/payment">
                        <FaUserPlus className="text-2xl"></FaUserPlus>
                        Payment
                      </NavLink>
                    </li>
                  </>
                )}
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
