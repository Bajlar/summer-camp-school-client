import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
     googleSignIn()
       .then(result => {
         const loggedInUser = result.user;
        //  console.log(loggedInUser);
         Swal.fire({
           position: "center",
           icon: "success",
           title: "User login successfully",
           showConfirmButton: false,
           timer: 1500,
         });
          navigate(from, { replace: true });
       })
  }

  return (
    <div className="pb-5 mt-4">
      <button
        onClick={handleGoogleSignIn}
        className="btn bg-[#04AA6D] hover:bg-[#04AA6D] text-white border-0"
      >
        <FaGoogle className="text-2xl"></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;