import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://summer-camp-school-server-bajlar.vercel.app/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`, { role: "admin" })
      .then((data) => {
        console.log(data.data);
        if (data.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`, { role: "instructor" })

      .then((data) => {
        console.log(data.data);
        if (data.data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cricket academy | Manage Users</title>
      </Helmet>
      <div className="relative overflow-x-auto md:px-16 mt-5">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-md text-white capitalize bg-[#04AA6D]">
            <tr>
              <th scope="col" className="px-6 py-3 font-inter">
                No.
              </th>
              <th scope="col" className="px-8 py-3 font-inter">
                Name
              </th>
              <th scope="col" className="px-8 py-3 font-inter">
                Email
              </th>
              <th scope="col" className="px-8 py-3 font-inter">
                Role
              </th>
              <th scope="col" className="px-8 py-3 font-inter"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-b bg-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4 font-inter">{user.name}</td>
                <td className="px-6 py-4 font-inter">{user.email}</td>
                <td className="py-4 font-inter">
                  <div className="flex gap-6">
                    {user.role === "admin" ? (
                      <span className="text-green-700 font-medium">Admin</span>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-sm capitalize"
                      >
                        Make Admin
                      </button>
                    )}
                  </div>
                </td>
                <td className="py-4 font-medium">
                  <div className="flex gap-6">
                    {user.role === "instructor" ? (
                      <span className="text-[#f04400] font-medium">
                        Instructor
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-sm capitalize"
                      >
                        Make Instructor
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
