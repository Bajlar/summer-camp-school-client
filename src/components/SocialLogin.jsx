import React from 'react';
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="pb-5 mt-4">
      <button
        className="btn bg-[#04AA6D] hover:bg-[#04AA6D] text-white border-0"
      >
        <FaGoogle className="text-2xl"></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;