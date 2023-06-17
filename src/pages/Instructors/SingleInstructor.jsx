import React from 'react';

const SingleInstructor = ({ instructor }) => {
  // console.log(instructor);
  const { image, name, email } = instructor;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="h-64 rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {name}</h2>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default SingleInstructor;