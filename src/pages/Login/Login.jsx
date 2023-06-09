import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="mt-4">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col md:w-4/12 mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-200">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    className="input w-full"
                  />
                  <div
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn text-lg text-white bg-[#04AA6D]
                  hover:bg-[#04AA6D] capitalize border-2"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-lg text-center font-medium text-[#D1A054]">
                New here? <Link to="/signUp">Create a New Account</Link>
              </p>
            </form>
            <div className="text-center -mt-5">
              <p className="text-lg font-medium">Or sign in with</p>
              <div className="pb-5 mt-4">
                <button
                  className="btn bg-[#04AA6D]
                  hover:bg-[#04AA6D] text-white"
                >
                  <FaGoogle className="text-2xl"></FaGoogle>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;