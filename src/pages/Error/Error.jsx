import React from 'react';
import error from '../../assets/images/error/404.gif';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <img src={error} alt="" />
      <div className="text-center -mt-5">
        <Link to="/">
          <button className="btn text-lg text-white bg-[#04AA6D] hover:bg-[#04AA6D] capitalize border-0">
            back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;