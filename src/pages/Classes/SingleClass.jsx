import React from 'react';

const SingleClass = ({ classes }) => {
  // console.log(classes);
  const { className, image, instructorName, price, availableSeats } = classes;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="h-64 rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Class Name: {className}</h2>
        <p>Instructor Name: {instructorName}</p>
        <p>Price: {price}</p>
        <p>Available Seats: {availableSeats}</p>
        <div className="card-actions">
          <button className="btn text-lg text-white bg-[#04AA6D] hover:bg-[#04AA6D] capitalize border-0">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;