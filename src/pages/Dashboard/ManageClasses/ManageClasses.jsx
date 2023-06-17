import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const navigate = useNavigate();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch(
      "https://summer-camp-school-server-bajlar.vercel.app/classes"
    );
    return res.json();
  });

  const pendingStatus = classes.filter((item) => item.status === "pending");
  const approvedStatus = classes.filter((item) => item.status === "approved");
  const deniedStatus = classes.filter((item) => item.status === "denied");

  const handleMakePending = (item) => {
    fetch(
      `https://summer-camp-school-server-bajlar.vercel.app/classes/admin/status/${item._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "pending" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${item.className} is Pending Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeApproved = (item) => {
    fetch(
      `https://summer-camp-school-server-bajlar.vercel.app/classes/admin/status/${item._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "approved" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${item.className} is Approved Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };

  const handleMakeDenied = (item) => {
    fetch(
      `https://summer-camp-school-server-bajlar.vercel.app/classes/admin/status/${item._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "denied" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${item.className} is Denied Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          navigate("/dashboard/feedback", {
            state: item._id,
          });
        }
      });
  };

  return (
    <div className="w-full min-h-screen">
      <Helmet>
        <title>Cricket academy | Manage Classes</title>
      </Helmet>

      <div className="text-center mb-4">
        <p className="text-3xl font-bold">Total Items: {classes.length}</p>
      </div>
      <div className="overflow-x-auto flex justify-center">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-semibold text-md">Class Image</th>
              <th className="font-semibold text-md">Class Name</th>
              <th className="font-semibold text-md">Instructor Name</th>
              <th className="font-semibold text-md">Instructor Email</th>
              <th className="font-semibold text-md">Available seats</th>
              <th className="font-semibold text-md">Price</th>
              <th className="font-semibold text-md">Action</th>
              <th className="font-semibold text-md">Action</th>
              <th className="font-semibold text-md">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingStatus.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="image w-20 h-14">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-[#737373]">{item.className}</div>
                </td>
                <td>
                  <div className="text-[#737373]">{item.instructorName}</div>
                </td>
                <td>
                  <div className="text-[#737373]">{item.instructorEmail}</div>
                </td>
                <td>
                  <div className="text-[#737373]">{item.availableSeats}</div>
                </td>
                <td className="text-orange-500">${item.price}</td>
                <td>
                  <div className="flex gap-6">
                    {item.status === "pending" ? (
                      <span className="text-[#f08e00] font-inter font-medium">
                        Pending
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakePending(item)}
                        className="btn btn-sm text-white bg-[#D1A054] hover:bg-[#eca841]"
                      >
                        Pending
                      </button>
                    )}
                  </div>
                </td>
                <td>
                  <div className="flex gap-6">
                    {item.status === "approved" ? (
                      <span className="text-blue-700 font-inter font-medium">
                        Approved
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeApproved(item)}
                        className="btn btn-sm text-white bg-[#04AA6D] hover:bg-[#10ce88]"
                      >
                        Approved
                      </button>
                    )}
                  </div>
                </td>
                <td>
                  <div className="flex gap-6">
                    {item.status === "denied" ? (
                      <span className="text-red-600 font-inter font-medium">
                        Denied
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeDenied(item)}
                        className="btn btn-sm text-white bg-red-500 hover:bg-red-700"
                      >
                        Denied
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {approvedStatus.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="image w-20 h-14">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-[#737373]">{item.className}</div>
                </td>
                <td>
                  <div className="text-[#737373]">{item.instructorName}</div>
                </td>
                <td>
                  <div className="text-[#737373]">{item.instructorEmail}</div>
                </td>
                <td>
                  <div className="text-[#737373]">{item.availableSeats}</div>
                </td>
                <td className="text-orange-500">${item.price}</td>
                <td>
                  <div className="flex gap-6">
                    {item.status === "pending" ? (
                      <span className="text-[#f08e00] font-inter font-medium">
                        Pending
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakePending(item)}
                        className="btn btn-sm text-white bg-[#D1A054] hover:bg-[#eca841]"
                      >
                        Pending
                      </button>
                    )}
                  </div>
                </td>
                <td>
                  <div className="flex gap-6">
                    {item.status === "approved" ? (
                      <span className="text-blue-700 font-inter font-medium">
                        Approved
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeApproved(item)}
                        className="btn btn-sm text-white bg-[#04AA6D] hover:bg-[#10ce88]"
                      >
                        Approved
                      </button>
                    )}
                  </div>
                </td>
                <td>
                  <div className="flex gap-6">
                    {item.status === "denied" ? (
                      <span className="text-red-600 font-inter font-medium">
                        Denied
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeDenied(item)}
                        className="btn btn-sm text-white bg-red-500 hover:bg-red-700"
                      >
                        Denied
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {deniedStatus.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="image w-20 h-14">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-[#737373]">{item.className}</div>
                </td>
                <td>
                  <div className="text-[#737373]">{item.instructorName}</div>
                </td>
                <td>
                  <div className="text-[#737373]">{item.instructorEmail}</div>
                </td>
                <td>
                  <div className="text-[#737373]">{item.availableSeats}</div>
                </td>
                <td className="text-orange-500">${item.price}</td>
                <td>
                  <div className="flex gap-6">
                    {item.status === "pending" ? (
                      <span className="text-[#f08e00] font-inter font-medium">
                        Pending
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakePending(item)}
                        className="btn btn-sm text-white bg-[#D1A054] hover:bg-[#eca841]"
                      >
                        Pending
                      </button>
                    )}
                  </div>
                </td>
                <td>
                  <div className="flex gap-6">
                    {item.status === "approved" ? (
                      <span className="text-blue-700 font-inter font-medium">
                        Approved
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeApproved(item)}
                        className="btn btn-sm text-white bg-[#04AA6D] hover:bg-[#10ce88]"
                      >
                        Approved
                      </button>
                    )}
                  </div>
                </td>
                <td>
                  <div className="flex gap-6">
                    {item.status === "denied" ? (
                      <span className="text-red-600 font-inter font-medium">
                        Denied
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeDenied(item)}
                        className="btn btn-sm text-white bg-red-500 hover:bg-red-700"
                      >
                        Denied
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

export default ManageClasses;
