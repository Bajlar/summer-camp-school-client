import React from "react";
import useSelectedClass from "../../../hooks/useSelectedClass";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MySelectedClass = () => {
  const [selected, refetch] = useSelectedClass();
  // console.log(selected);

  const handleDelete = (item) => {
    // console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://summer-camp-school-server-bajlar.vercel.app/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            refetch();
            if (data.deletedCount === 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full min-h-screen p-4">
      <div className="text-center mb-4">
        <p className="text-3xl font-bold">Total Items: {selected.length}</p>
      </div>
      <div className="overflow-x-auto flex justify-center">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-semibold"></th>
              <th className="font-semibold">Class Image</th>
              <th className="font-semibold">Class Name</th>
              <th className="font-semibold">Instructor Name</th>
              <th className="font-semibold">Student Email</th>
              <th className="font-semibold">Price</th>
              <th className="font-semibold">Action</th>
              <th className="font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {selected.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="image w-20 h-16">
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
                  <div className="text-[#737373]">{item.email}</div>
                </td>
                <td>
                  <div className="text-orange-500">${item.price}</div>
                </td>
                <td>
                  <button
                    className="btn text-lg text-white bg-[#04AA6D]
                  hover:bg-[#04AA6D] capitalize border-0"
                  >
                    Pay
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn bg-[#B91C1C] hover:bg-[#B91C1C] text-white border-0"
                  >
                    <FaTrashAlt className="text-2xl"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
