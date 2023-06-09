import React from 'react';
import { Link } from "react-router-dom";
import { FaGoogle} from "react-icons/fa";
import { useForm } from "react-hook-form";

const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);  

  // if (password !== confirm) {
  //   setError("Your password did not match");
  //   return;
  // } else if (password.length < 6) {
  //   setError("password must be 6 characters or longer");
  //   return;
  // }
 
  return (
    <div className="mt-4">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col md:w-4/12 mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Register now!</h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-200">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Enter your Name"
                  className="input"
                />
                {errors.name && (
                  <span className="text-red-500 text-left mt-2">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your Email"
                  className="input"
                />
                {errors.email && (
                  <span className="text-red-500 text-left mt-2">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&?*])(?=.*[0-9])/,
                  })}
                  placeholder="Enter your password"
                  className="input"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-left mt-2">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-left mt-2">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 text-left mt-2">
                    Password must have one uppercase one lower case, one special
                    characters
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("confirm")}
                  placeholder="Confirm Password"
                  className="input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="Enter your photo URL"
                  className="input"
                />
                {errors.photo && (
                  <span className="text-red-500 text-left mt-2">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn text-lg text-white bg-[#04AA6D]
                  hover:bg-[#04AA6D] capitalize border-2"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p className="text-lg text-center font-medium text-[#D1A054]">
                Already registered? <Link to="/login">Go to login page</Link>
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

export default SignUp;