import React from 'react';

const Instructor = ({ item }) => {
  // console.log(item);
  const { image, className, name, activities, email } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="h-64 rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Instructor Name: {name}</h2>
        <h3 className="">Class Name: {className}</h3>
        <p>Activities: {activities}</p>
        {/* <div className="card-actions">
          <button className="btn text-lg text-white bg-[#04AA6D] hover:bg-[#04AA6D] capitalize border-0">
            See Classes
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Instructor;