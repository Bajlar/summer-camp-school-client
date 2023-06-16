import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };
        fetch("https://summer-camp-school-server-bajlar.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((result) => result.json())
          .then(() => {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Successfully Login",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something Went Wrong! Please Try Again",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

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
