import React from 'react';
import useTheme from '../../../hooks/useTheme';

const Instructor = ({ item }) => {
  // console.log(item);
  const { image, className, name, email } = item;
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`card shadow-xl ${isDarkMode ? "bg-black" : "bg-base-100"}`}
    >
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="h-64 rounded-xl" />
      </figure>
      <div
        className={`card-body items-center text-center ${
          isDarkMode ? "text-white" : ""
        }`}
      >
        <h2 className="card-title">Instructor Name: {name}</h2>
        <h3 className="">Class Name: {className}</h3>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Instructor;