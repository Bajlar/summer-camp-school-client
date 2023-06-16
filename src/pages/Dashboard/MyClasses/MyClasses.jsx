import React from 'react';
import useClasses from '../../../hooks/useClasses';
import { Helmet } from 'react-helmet-async';


const MyClasses = () => {
  const [classes] = useClasses();
  // console.log(classes);

  return (
    <div className="w-full min-h-screen">
      <Helmet>
        <title>Cricket academy | My Classes</title>
      </Helmet>
      <div className="text-center mb-4">
        <p className="text-3xl font-bold">Total Items: {classes.length}</p>
      </div>
      <div className="overflow-x-auto flex justify-center">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-semibold text-md"></th>
              <th className="font-semibold text-md">Class Image</th>
              <th className="font-semibold text-md">Class Name</th>
              <th className="font-semibold text-md">Instructor Name</th>
              <th className="font-semibold text-md">Available seats</th>
              <th className="font-semibold text-md">Enrolled</th>
              <th className="font-semibold text-md">Price</th>
              <th className="font-semibold text-md">Status</th>
              <th className="font-semibold text-md">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
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
                  <div className="text-[#737373]">{item.availableSeats}</div>
                </td>
                <td>
                  <div className="text-[#737373]">
                    {item.EnrolledStudents ? item.EnrolledStudents : 0}
                  </div>
                </td>
                <td className="text-orange-500">${item.price}</td>
                <td>
                  <div className="text-[#737373]">{item.status}</div>
                </td>
                <td>
                  <button className="btn btn-sm capitalize">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;