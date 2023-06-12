import React from 'react';

const SingleClass = ({ classes }) => {
  // console.log(classes);
  const { className, image, instructorName, price, availableSeats } = classes;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Class Name: {className}</h2>
        <p>Instructor Name: {instructorName}</p>
        <p>Price: {price}</p>
        <p>Available Seats: {availableSeats}</p>
        <div className="card-actions">
          <button className="btn text-lg text-white bg-[#04AA6D] hover:bg-[#04AA6D] capitalize border-2">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;