import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "Admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
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
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "Instructor" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
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
                    {user.role === "Admin" ? (
                      <span className="text-green-700 font-medium">
                        Admin
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-sm"
                      >
                        Make Admin
                      </button>
                    )}
                  </div>
                </td>
                <td className="py-4 font-medium">
                  <div className="flex gap-6">
                    {user.role === "Instructor" ? (
                      <span className="text-[#f04400] font-medium">
                        Instructor
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-sm"
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